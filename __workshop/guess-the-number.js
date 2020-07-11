const request = require("request");

const inquirer = require("inquirer");

const hiddenNum = Math.round(Math.random() * 100);
inquirer
  .prompt(["What do you guess?"])
  .then((answer) => {
    if (answer === hiddenNum) {
      console.log("success");
    } else {
    }
  })
  .catch((err) => {
    return err.error ? JSON.parse(err.error) : err;
  });
