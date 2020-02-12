const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {

  // Define constant range to start game:
  let min = 1;
  let max = 101;

  //Greet user and offer game rules:
  console.log("Hello. I am Lieutenant Commander Data.\nPlease think of a number between 1 and 100 (inclusive).\nI will try to guess it.")

  //Gather user response if they have thought of a number within the range; display response for information:
  let randNumResp = await ask("Have you selected a random number between 1 and 100? (Y/N)\n");

  console.log('You entered: ' + randNumResp);

  if (randNumResp === 'N') {
    console.log("I'll assume you've chosen by now.");

  };

  //Declare and initialize app-level variables:
  let highLow;
  let middle;
  let lastGuess;
  let nextGuess = Math.floor((max + min) / 2);
  let tryCount = 1;
  // Ask user if guess is correct; first run will be for range set in app-level variables:
  let userChoice = (await ask("Is it... " + nextGuess + "? (Y/N)\n")).toUpperCase();

  ////////////////////////////////////////////

  // Declare function guessNum() to calculate binary search:
  /*
    pivot is equal to the number known to not be the correct answer within the range.
    option is the user input as to whether the game should guess higher or lower.
    middle is set to be the midpoint in the range defined by the pivot and either the max or min as defined prior
  */
  function guessNum(pivot, option) {

    if (option === 'H') {
      middle = Math.floor((max + pivot) / 2);
    } else if (option === 'L') {
      middle = Math.floor((pivot + min) / 2);
    };
    return middle;
  }

  ////////////////////////////////////////////////


  // Start while loop to generate successive guesses:
  while (userChoice !== 'Y') {


    if (userChoice === 'N') {

      highLow = (await ask('Hmmm...is it higher(H) or lower(L)?')).toUpperCase();

      if (highLow === 'H') {  // evaluate the user's highLow input for meaning 'go higher' or 'go lower'
        min = nextGuess;      // set the value of min to that of the prior guess
      } else if (highLow === 'L') {
        max = nextGuess;     // set the value of max to that of the prior guess
      };

      // Call the guessNum() function with the prior guess in the pivot param, highLow input in the option param:
      nextGuess = guessNum(nextGuess, highLow);   // set the function result to be the next guess
      
// Evaluate whether user has forgotten or changed the original number:
      if (nextGuess === lastGuess && userChoice === 'N') {
        console.log("But you said your number was above " + lastGuess + "!\nHow can it now be below " + nextGuess + "?\nData out.");
        process.exit();

      };

    };

    tryCount++;   //increment the count of tries
    lastGuess = nextGuess;  // set lastGuess equal to this nextGuess; lastGuess is stored outside of the loop to compare later for cheat detection.

    // Gather user input again to either loop again to refine guess, or claim victory:
    userChoice = (await ask("Is it... " + nextGuess + "? (Y/N)\n")).toUpperCase();

  }

  // user admits guess was correct; exit game with victory message and number of tries it took
  if (userChoice === 'Y') {
    console.log("Lt. Commander Data wins again!!\nIt only took me " + tryCount + " tries!");
    process.exit();
  };

  process.exit();
}
