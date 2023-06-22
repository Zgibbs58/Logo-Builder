class shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  renderShape() {
    return `<${this.shapeCode} fill="${this.shapeColor}" />`;
  }
}

class circle extends shape {
  constructor(shapeColor) {
    super(shapeColor);
    // shapeCode is the SVG code for a circle
    // textY is the y coordinate for the text to center it vertically
    // this are fixed values for the circle class
    this.shapeCode = `circle cx="150" cy="100" r="100"`;
    this.textY = 120;
  }
}

class triangle extends shape {
  constructor(shapeColor) {
    super(shapeColor);
    this.shapeCode = `polygon points="150, 0 300, 200 0, 200"`;
    this.textY = 150;
  }
}

class square extends shape {
  constructor(shapeColor) {
    super(shapeColor);
    this.shapeCode = `rect x="50" y="0" width="200" height="200"`;
    this.textY = 120;
  }
}

module.exports = { shape, circle, triangle, square };
