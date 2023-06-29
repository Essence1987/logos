const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('should return SVG code for a triangle with the given color', () => {
    const triangle = new Triangle('blue');
    const expectedSvgCode = '<polygon points="150,20 220,170 80,170" fill="blue" />';
    expect(triangle.getSvgCode()).toBe(expectedSvgCode);
  });
});

describe('Circle', () => {
  test('should return SVG code for a circle with the given color', () => {
    const circle = new Circle('red');
    const expectedSvgCode = '<circle cx="150" cy="100" r="50" fill="red" />';
    expect(circle.getSvgCode()).toBe(expectedSvgCode);
  });
});

describe('Square', () => {
  test('should return SVG code for a square with the given color', () => {
    const square = new Square('green');
    const expectedSvgCode = '<rect x="100" y="50" width="100" height="100" fill="green" />';
    expect(square.getSvgCode()).toBe(expectedSvgCode);
  });
});
