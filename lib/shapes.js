module.exports = {
    circle: (color) => `<circle cx="150" cy="100" r="50" fill="${color}" />`,
    triangle: (color) =>
      `<polygon points="150,20 220,170 80,170" fill="${color}" />`,
    square: (color) => `<rect x="100" y="50" width="100" height="100" fill="${color}" />`,
  };