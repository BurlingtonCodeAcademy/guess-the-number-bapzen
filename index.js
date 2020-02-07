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
  let randNumResp  = await ask("Have you selected a random number between 1 and 100? (Y/N)\n");
  console.log('You entered: ' + randNumResp);
  // Now try and complete the program.
  process.exit();
}
