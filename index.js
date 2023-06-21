const fs = require("fs");
const inquirer = require("inquirer");
const generateSVG = require("./lib/generateSVG");
const shape = require("./lib/shapes");

const prompt = inquirer.createPromptModule();

const questions = require("./lib/questions");

prompt(questions).then((answers) => {
  fs.writeFileSync("./examples/logo.svg", generateSVG(answers));
});
