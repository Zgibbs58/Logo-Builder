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
  constructor(code) {
    this.code = code;
  }
  renderLogo(shape, color, text, textColor) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${shape} fill="${color}" />
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>
        </svg>`;
  }
}

const circle = new shape('circle cx="150" cy="120" r="80"');
const triangle = new shape('polygon points="150, 5 290, 182 5, 182"');
const square = new shape('rect x="60" y="40" width="180" height="180"');

module.exports = { shape, circle, triangle, square };
