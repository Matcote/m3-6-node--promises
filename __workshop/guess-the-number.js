const request = require("request");

const inquirer = require("inquirer");

const hiddenNum = Math.round(Math.random() * 100);
let guesses = 5;
console.log(hiddenNum);
inquirer
  .prompt([
    {
      type: "input",
      name: "guess",
      message: "What's the magic number? (between 0-100)",
      validate: (value) => {
        if (value == hiddenNum) {
          return true;
        }
        guesses--;
        if (guesses === 0) {
          return true;
        }
        if (value > hiddenNum) {
          return `Too high! ${guesses} guesses remaining!`;
        } else if (value < hiddenNum) {
          return `Too low! ${guesses} guesses remaining!`;
        }
        return `Wrong! ${guesses} guesses remaining!`;
      },
    },
  ])
  .then((answer) => {
    if (answer.guess == hiddenNum) {
      console.log("Correct! " + answer.guess + " was the hidden number!");
    } else {
      console.log(
        "Better luck next time... :/ The magic number was " + hiddenNum
      );
    }
  })
  .catch((err) => {
    return err.error ? JSON.parse(err.error) : err;
  });
