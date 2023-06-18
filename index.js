const fs = require("fs");
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

prompt([
  {
    type: "input",
    message: "Enter the three letter abbreviation for your logo:",
    name: "text",
    validate: function (answer) {
      if (answer.length < 3 || answer.length > 3) {
        return console.log(" Logo text must be 3 characters long.");
      }
      return true;
    },
  },
  {
    type: "list",
    message: "Would you rather choose color by name or hex code?",
    name: "colorChoice",
    choices: ["name", "hex"],
  },
  {
    type: "input",
    message: "Enter the name of your text color:",
    name: "colorName",
    when: (answers) => answers.colorChoice.includes("name"),
  },
  {
    type: "input",
    message: "Enter the 6 digit hex code for your text color without the #:",
    name: "colorHex",
    validate: function (answer) {
      const numberValue = Number(answer);
      if (answer.length > 6 || isNaN(numberValue)) {
        return console.log(" Invalid entry. Please enter a 6 digit hex code.");
      }
      return true;
    },
    when: (answers) => answers.colorChoice.includes("hex"),
  },
  {
    type: "list",
    message: "What is your preferred method of communication?",
    name: "license",
    choices: [
      { name: "circle", value: "circle" },
      { name: "triangle", value: "triangle" },
      { name: "square", value: "square" },
    ],
  },
]).then((answers) => {
  console.log(answers);
});
