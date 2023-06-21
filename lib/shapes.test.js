const shapes = require("./shapes");

describe("shape", () => {
  describe("renderLogo()", () => {
    it("should return a circle", () => {
      const circleSvg = shapes.circle.renderLogo(shapes.circle.code, "red", "test", "black");
      expect(circleSvg).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="120" r="80" fill="red" />
<text x="150" y="140" font-size="60" text-anchor="middle" fill="black">TEST</text>
</svg>`
      );
    });
  });
});
