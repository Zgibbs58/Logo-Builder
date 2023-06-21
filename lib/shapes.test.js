const shape = require("./shapes");

describe("shape", () => {
  describe("renderShape()", () => {
    it("should return a circle", () => {
      const circleSvg = shape.circle.renderShape(shape.circle, "red");
      expect(circleSvg).toEqual('<circle cx="150" cy="120" r="80" fill="red" />');
    });
  });
});
