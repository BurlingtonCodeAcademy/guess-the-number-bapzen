const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Please think of a number between 1 and 100 (inclusive).\nI will try to guess it.")
  let randNumResp = await ask("Have you selected a random number between 1 and 100? (Y/N)\n");
  console.log('You entered: ' + randNumResp);

  function randomInt(max, min) {
    return Math.floor(min + (Math.random() * (max - min + 1)))
   }

  let randGuess = randomInt(1, 100);
  let firstGuess = (await ask("Is it... " + randGuess + "? (Y/N)")).toUpperCase();
    if (firstGuess === 'Y') {
      console.log("Awesome-O wins again!")
      process.exit();
    }
  
  // Now try and complete the program.
  process.exit();
}
