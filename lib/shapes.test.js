const { Shape, Circle, Triangle, Square } = require("./shapes");

describe("shape", () => {
  describe("circle", () => {
    it("should return the same circle SVG logo code", () => {
      const shape = new Circle("red");
      expect(shape.renderShape()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');
    });
  });
  describe("triangle", () => {
    it("should return the same triangle SVG logo code", () => {
      const shape = new Triangle("red");
      expect(shape.renderShape()).toEqual('<polygon points="150, 0 300, 200 0, 200" fill="red" />');
    });
  });
  describe("square", () => {
    it("should return the same square SVG logo code", () => {
      const shape = new Square("red");
      expect(shape.renderShape()).toEqual('<rect x="50" y="0" width="200" height="200" fill="red" />');
    });
  });
});
