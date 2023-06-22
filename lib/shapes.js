// class shape {
//   constructor(shapeCode) {
//     this.shapeCode = shapeCode;
//   }
//   renderShape(shape, color) {
//     return `<${shape.shapeCode} fill="${color}" />`;
//   }
// }

// const circle = new shape('circle cx="150" cy="120" r="80"');

// module.exports = { shape, circle, triangle, square };

class shape {
  constructor(code, textY) {
    this.code = code;
    this.textY = textY;
  }
  renderLogo(shape, textY, color, text, textColor) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<${shape} fill="${color}" />
<text x="150" y="${textY}" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>
</svg>`;
  }
}

const circle = new shape('circle cx="150" cy="100" r="100"', 120);
const triangle = new shape('polygon points="150, 0 300, 200 0, 200"', 140);
const square = new shape('rect x="50" y="0" width="200" height="200"', 120);

module.exports = { shape, circle, triangle, square };
