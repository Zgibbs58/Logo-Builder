module.exports = [
  {
    default: "zwg",
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
    default: "blue",
    type: "input",
    message: "Enter the name of the text color:",
    name: "textColor",
    when: (answers) => answers.colorChoice.includes("name"),
  },
  {
    type: "input",
    message: "Enter the 6 digit hex code for the text color without the #:",
    name: "textColor",
    validate: function (answer) {
      const hexRegex = /^([0-9A-Fa-f]{3}){1,2}$/i;
      if (answer.length > 6 || hexRegex.test(answer) === false) {
        return console.log(" Invalid entry. Please enter a 6 digit hex code.");
      }
      return true;
    },
    when: (answers) => answers.colorChoice.includes("hex"),
  },
  {
    type: "list",
    message: "Choose the shape you want for your logo:",
    name: "shape",
    choices: [
      { name: "circle", value: "circle" },
      { name: "triangle", value: "triangle" },
      { name: "square", value: "square" },
    ],
  },
  {
    default: "red",
    type: "input",
    message: "Enter the name of the shape color:",
    name: "shapeColor",
    when: (answers) => answers.colorChoice.includes("name"),
  },
  {
    type: "input",
    message: "Enter the 6 digit hex code for the shape color without the #:",
    name: "shapeColor",
    validate: function (answer) {
      const hexRegex = /^([0-9A-Fa-f]{3}){1,2}$/i;
      if (answer.length > 6 || hexRegex.test(answer) === false) {
        return console.log(" Invalid entry. Please enter a 6 digit hex code.");
      }
      return true;
    },
    when: (answers) => answers.colorChoice.includes("hex"),
  },
];
