const fs = require("fs");
const inquirer = require("inquirer");
// const generateSVG = require("./lib/generateSVG");
const shapes = require("./lib/shapes");

const prompt = inquirer.createPromptModule();

const questions = require("./lib/questions");

prompt(questions).then((answers) => {
  // defining shape as the shape object from shapes.js
  const shape = shapes[answers.shape];
  fs.writeFileSync(
    "./examples/logo.svg",
    shape.renderLogo(
      shape.code,
      answers.colorChoice.includes("hex") ? "#" + answers.shapeColor : answers.shapeColor,
      answers.text,
      answers.colorChoice.includes("hex") ? "#" + answers.textColor : answers.textColor
    )
  );
});
