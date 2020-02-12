const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

start();

async function start() {

    //Greet user and offer game rules:
    console.log("Hello. I am Lieutenant Commander Data.\nI am thinking of a number between 1 and 100 (inclusive).\nTry to guess it!")

    //Declare global variables
    let tryCount = 1;
    //Generate a random number between 1 and 100 and store for computer to judge user guesses against.
    let dataNum = Math.floor((Math.random() * 100));   
    let userGuess;

    // Ask user for guess
    userGuess = (await ask("What is my number ?\n")).toUpperCase();
 
    // Start while loop to generate successive guess evaluations; get user guess in each scenario, rather than at end of if...else stmt:
    while (userGuess !== dataNum) {

       // Compare current user guess to global constant dataNum
        if (userGuess > dataNum) {
            console.log("Close, but not quite. Try guessing lower.");
            userGuess = (await ask("What is my number ?\n")).toUpperCase();
        } else if (userGuess < dataNum) {
            console.log("Almost. Try something higher.");
            userGuess = (await ask("What is my number ?\n")).toUpperCase();
        } else {
            console.log("You win!! My number is indeed " + dataNum + "\n It only took " + tryCount + " tries. Let's go to the Holodeck.");
            process.exit();
        };
        tryCount++;     //increment tryCount to count number of attempts
    };

    process.exit();
}
