class shape {
  constructor(shapeCode) {
    this.shapeCode = shapeCode;
  }
  renderShape(shape, color) {
    return `<${shape.shapeCode} fill="${color}" />`;
  }
}

const circle = new shape('circle cx="150" cy="100" r="80"');
const triangle = new shape('polygon points="150, 18 244, 182 56, 182"');
const square = new shape('rect x="10" y="10" width="30" height="30"');

module.exports = { shape, circle, triangle, square };
