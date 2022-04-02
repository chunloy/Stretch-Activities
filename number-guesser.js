/*
Documentation:
https://www.npmjs.com/package/prompt-sync
https://www.codecademy.com/article/getting-user-input-in-node-js

Before running the program:
1. Create a package.json file
2. Open the file and paste the following:
  {
    "dependencies": {
      "prompt-sync": "^4.1.5"
    }
  }
3. run npm install. This will install prompt-sync.
*/

let prompt = require("prompt-sync")({ sigint: true }); //prompt entry from user in command line
let randomNum = Math.floor(Math.random() * 101); //generate a random number from 0-100 (inclusive)
let previousGuesses = []; //store guesses in array
let totalGuesses = 0; //initialize to zero

const checkAnswer = function () {
  while (true) {
    let answer = prompt('Enter a number from 0 to 100: '); //prompt user for input
    if (isNaN(answer)) {
      console.log('Not a number! Try again.'); //check for valid entry
    } else if (previousGuesses.includes(Number(answer))) {
      console.log('You already guessed this number. Try again.'); //check for repeated entry
    } else if (Number(answer) > randomNum) {
      console.log('Too High! Try again.');
      totalGuesses++; //update total
      previousGuesses.push(Number(answer));
    } else if (Number(answer) < randomNum) {
      console.log('Too low! Try again');
      totalGuesses++; //update total
      previousGuesses.push(Number(answer));
    } else if (Number(answer) === randomNum) {
      totalGuesses++; //update total
      console.log(`You got it! Number of attempts: ${totalGuesses}`);
      console.log('\nGenerating new number...\n');
      randomNum = Math.floor(Math.random() * 101); //generate new number
    }
  }
}

console.log('Press ctrl+C to close the program');
checkAnswer();