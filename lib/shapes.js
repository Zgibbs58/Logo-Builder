class shape {
  constructor(shapeCode) {
    this.shapeCode = shapeCode;
  }
  renderShape(shape, color) {
    return `<${shape.shapeCode} fill="${color}" />`;
  }
}

const circle = new shape('circle cx="150" cy="120" r="80"');
const triangle = new shape('polygon points="150, 5 290, 182 5, 182"');
const square = new shape('rect x="60" y="40" width="180" height="180"');

module.exports = { shape, circle, triangle, square };
