const { shape, circle, triangle, square } = require("./shapes");

describe("shape", () => {
  describe("renderLogo()", () => {
    it("should return the same circle SVG logo code", () => {
      const circleSvg = circle.renderLogo(circle.code, circle.textY, "red", "tes", "black");
      expect(circleSvg).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" fill="red" />
<font><font-face font-family="Super Sans" /></font>
<text x="150" y="120" font-size="60" text-anchor="middle" font-family="Super Sans" fill="black">TES</text>
</svg>`
      );
    });
  });
});

describe("shape", () => {
  describe("renderLogo()", () => {
    it("should return the same triangle SVG logo code", () => {
      const triangleSvg = triangle.renderLogo(triangle.code, triangle.textY, "red", "tes", "black");
      expect(triangleSvg).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 0 300, 200 0, 200" fill="red" />
<font><font-face font-family="Super Sans" /></font>
<text x="150" y="150" font-size="60" text-anchor="middle" font-family="Super Sans" fill="black">TES</text>
</svg>`
      );
    });
  });
});

describe("shape", () => {
  describe("renderLogo()", () => {
    it("should return the same square SVG logo code", () => {
      const squareSvg = square.renderLogo(square.code, square.textY, "red", "tes", "black");
      expect(squareSvg).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="0" width="200" height="200" fill="red" />
<font><font-face font-family="Super Sans" /></font>
<text x="150" y="120" font-size="60" text-anchor="middle" font-family="Super Sans" fill="black">TES</text>
</svg>`
      );
    });
  });
});
