class shape {
  constructor(shapeCode, textY, shapeColor) {
    this.shapeCode = shapeCode;
    this.textY = textY;
    this.shapeColor = shapeColor;
  }
  renderLogo(text, textColor) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<${this.shapeCode} fill="${this.shapeColor}" />
<font><font-face font-family="Super Sans" /></font>
<text x="150" y="${this.textY}" font-size="60" text-anchor="middle" font-family="Super Sans" fill="${textColor}">${text.toUpperCase()}</text>
</svg>`;
  }
}

class circle extends shape {
  constructor(shapeColor) {
    const shapeCode = 'circle cx="150" cy="100" r="100"';
    const textY = 120;
    super(shapeCode, textY, shapeColor);
  }
}

class triangle extends shape {
  constructor(shapeColor) {
    const shapeCode = 'polygon points="150, 0 300, 200 0, 200"';
    const textY = 150;
    super(shapeCode, textY, shapeColor);
  }
}

class square extends shape {
  constructor(shapeColor) {
    const shapeCode = 'rect x="50" y="0" width="200" height="200"';
    const textY = 120;
    super(shapeCode, textY, shapeColor);
  }
}

module.exports = { shape, circle, triangle, square };
