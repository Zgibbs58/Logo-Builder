class shape {
  constructor(shapeCode, textY, shapeColor) {
    this.shapeCode = shapeCode;
    this.textY = textY;
    this.shapeColor = shapeColor;
  }
  renderShape() {
    return `<${this.shapeCode} fill="${this.shapeColor}" />`;
  }
}

class circle extends shape {
  constructor(shapeColor) {
    // shapeCode is the SVG code for a circle
    // textY is the y coordinate for the text to center it vertically
    // these are passed to the super class constructor
    const shapeCode = `circle cx="150" cy="100" r="100"`;
    const textY = 120;
    super(shapeCode, textY, shapeColor);
  }
}

class triangle extends shape {
  constructor(shapeColor) {
    const shapeCode = `polygon points="150, 0 300, 200 0, 200"`;
    const textY = 150;
    super(shapeCode, textY, shapeColor);
  }
}

class square extends shape {
  constructor(shapeColor) {
    const shapeCode = `rect x="50" y="0" width="200" height="200"`;
    const textY = 120;
    super(shapeCode, textY, shapeColor);
  }
}

module.exports = { shape, circle, triangle, square };
