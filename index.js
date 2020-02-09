const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();



async function start() {

  let min = 1;
  let max = 101;

  console.log("Hello. I am Lt. Commander Data.\nPlease think of a number between 1 and 100 (inclusive).\nI will try to guess it.")

  let randNumResp = await ask("Have you selected a random number between 1 and 100? (Y/N)\n");

  console.log('You entered: ' + randNumResp);

  let highLow;
  let middle;
  // let nextGuess;
  let nextGuess = Math.floor((max + min) / 2);
  let userChoice = (await ask("Is it... " + nextGuess + "? (Y/N)\n")).toUpperCase();

  ////////////////////////////////////////////

  function guessNum(pivot, option) {
    
    if (option === 'H') {
      middle = Math.floor((max + pivot) / 2);
    } else if (option === 'L') {
      middle = Math.floor((pivot + min) / 2);
    };
    // console.log('Middle is ' + middle + '.');
    return middle;
  }

  ////////////////////////////////////////////////

  while (userChoice !== 'Y') {

    if (userChoice === 'N') {
 
      highLow = (await ask('Hmmm...is it higher(H) or lower(L)?')).toUpperCase();

      if (highLow === 'H') {
        min = nextGuess;
      } else if (highLow === 'L') {
        max = nextGuess;
      };

      nextGuess = guessNum(nextGuess, highLow);

    };

    userChoice = (await ask("Is it... " + nextGuess + "? (Y/N)\n")).toUpperCase();
  }

  if (userChoice === 'Y') {
    console.log("Lt. Commander Data wins again!!")
    process.exit();
  };

  // Now try and complete the program.
  process.exit();
}
