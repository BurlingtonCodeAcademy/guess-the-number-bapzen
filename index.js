const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Hello. I am Awesome-O.\nPlease think of a number between 1 and 100 (inclusive).\nI will try to guess it.")
  let randNumResp = await ask("Have you selected a random number between 1 and 100? (Y/N)\n");
  console.log('You entered: ' + randNumResp);

  //A function to generate a random integer within a specified range:
  function randomInt(max, min) {
    return Math.floor(min + (Math.random() * (max - min + 1)))
   }

  //A function to generate an array of each number between the start and end values:
   


   // A function to implement binary search within a specified range
   function guessEng(firstNum, lastNum) {
     let left = 1;
     let right = 99;
     let guessArr = []
     while (left <= right) {
       let middle = Math.floor((left + right) / 2)
       if 
     }
    if (firstNum > lastNum) {
      return 0;
    }
   }

  let randGuess = randomInt(1, 100);  //  <= Set the number range here

  // Sanitize the input; capitalize character to pass to if...else stmt
  let firstGuess = (await ask("Is it... " + randGuess + "? (Y/N)\n")).toUpperCase();
    if (firstGuess === 'Y') {
      console.log("Awesome-O wins again!")
      process.exit();
    } else if (firstGuess === 'N') {
      let secondGuess = (await ask('Hmmm...is it higher(H) or lower(L)?')).toUpperCase();
      if (secondGuess === 'H') {

      } else if (secondGuess === 'L') {

      }
    }
  
  // Now try and complete the program.
  process.exit();
}
