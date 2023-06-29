class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getSvgCode() {
      throw new Error('getSvgCode() method must be implemented in child class');
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    getSvgCode() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    getSvgCode() {
      return `<polygon points="150,20 220,170 80,170" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    getSvgCode() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Circle,
    Triangle,
    Square,
  };
  