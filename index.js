// used fs/promises instead of fs because it is a promise based version of the fs module
// and can return promises that can be chained using .then() and .catch() like in exercise 24-Stu_Promises-Catch
const fs = require("fs/promises");
const inquirer = require("inquirer");
// const generateSVG = require("./lib/generateSVG");
const shapes = require("./lib/shapes");

const prompt = inquirer.createPromptModule();

const questions = require("./lib/questions");

prompt(questions)
  .then((answers) => {
    // defining shape as the shape object from shapes.js
    const shape = shapes[answers.shape];
    // created a variable for the renderLogo method from shapes.js for readability
    const generatedSVG = shape.renderLogo(
      shape.code,
      shape.textY,
      answers.colorChoice.includes("hex") ? "#" + answers.shapeColor : answers.shapeColor,
      answers.text,
      answers.colorChoice.includes("hex") ? "#" + answers.textColor : answers.textColor
    );
    return fs.writeFile("./examples/logo.svg", generatedSVG);
  })
  .then(() => console.log("Generated logo.svg"))
  .catch((err) => {
    console.log(err);
    console.log("Unable to write the file logo.svg");
  });
