// used fs/promises instead of fs because it is a promise based version of the fs module
// and can return promises that can be chained using .then() and .catch() like in exercise 24-Stu_Promises-Catch
const fs = require("fs/promises");
const inquirer = require("inquirer");
// const generateSVG = require("./lib/generateSVG");
const { shape, circle, triangle, square } = require("./lib/shapes");

const prompt = inquirer.createPromptModule();

const questions = require("./lib/questions");

prompt(questions)
  .then((answers) => {
    let shape;
    if (answers.shape === "circle") {
      // This is just answers.shapeColor
      // added a ternary operator to check if the user inputted a hex color code to add the # to the beginning of the string
      shape = new circle(answers.colorChoice.includes("hex") ? "#" + answers.shapeColor : answers.shapeColor);
    } else if (answers.shape === "triangle") {
      shape = new triangle(answers.colorChoice.includes("hex") ? "#" + answers.shapeColor : answers.shapeColor);
    } else if (answers.shape === "square") {
      shape = new square(answers.colorChoice.includes("hex") ? "#" + answers.shapeColor : answers.shapeColor);
    }
    // created a variable for the renderLogo method from shapes.js for readability
    const generatedSVG = shape.renderLogo(answers.text, answers.colorChoice.includes("hex") ? "#" + answers.textColor : answers.textColor);
    return fs.writeFile("./examples/logo.svg", generatedSVG);
  })
  .then(() => console.log("Generated logo.svg"))
  .catch((err) => {
    console.log(err);
    console.log("Unable to write the file logo.svg");
  });
