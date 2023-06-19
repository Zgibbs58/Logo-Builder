class shape {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }
  rednerShape(shape, color) {
    return `<fill="${color}" />`;
  }
}

const circle = new shape(`circle cx="150" cy="100" r="80"`, color);
const triangle = new shape("triangle", color);
const square = new shape("square", color);

module.exports = { shape, circle, triangle, square };
