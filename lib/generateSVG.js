const shapes = require("./shapes");

function generateSVG(answers) {
  // shapes[answers.shape] is accessing the shape object from shapes.js
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${shapes[answers.shape].renderShape(shapes[answers.shape], answers.shapeColor)}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`;
}

module.exports = generateSVG;
