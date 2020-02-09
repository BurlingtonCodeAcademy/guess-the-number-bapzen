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
  let max = 100;

  console.log("Hello. I am Lt. Commander Data.\nPlease think of a number between 1 and 100 (inclusive).\nI will try to guess it.")

  let randNumResp = await ask("Have you selected a random number between 1 and 100? (Y/N)\n");

  console.log('You entered: ' + randNumResp);

  let highLow;
  let bestGuess = Math.floor((max - min) / 2);
  let userChoice = (await ask("Is it... " + bestGuess + "? (Y/N)\n")).toUpperCase();


 

  function guessNum(min, max, option) {
    let pivot;
    option = highLow;
    if (option === 'H') {
      pivot = bestGuess + 1;
      bestGuess = Math.floor((max - pivot) / 2);
    } else if (option === 'L') {
      pivot = bestGuess - 1;
      bestGuess = Math.floor((pivot - min) / 2);
    };
    return bestGuess;
  }


  while (userChoice !== 'Y') {

    // bestGuess = guessNum(min, max, highLow);


    if (userChoice === 'N') {

      let highLow = (await ask('Hmmm...is it higher(H) or lower(L)?')).toUpperCase();

      // Sanitize the input; capitalize character to pass to if...else stmt
      bestGuess = guessNum(min, max, highLow);

      
    };

    userChoice = (await ask("Is it... " + bestGuess + "? (Y/N)\n")).toUpperCase();
  }

  if (userChoice === 'Y') {
    console.log("Lt. Commander Data wins again!!")
    process.exit();
  };

  // Now try and complete the program.
  process.exit();
}
