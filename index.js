const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

function createLogo() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => {
          if (input.length > 3) {
            return 'Only three characters allowed.';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shapeChoice',
        message: 'Choose a shape:',
        choices: Object.keys(shapes),
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):',
      },
    ])
    .then((answers) => {
      console.log(answers);
      // Create SVG content based on user input
      const shape = new shapes[answers.shapeChoice](answers.shapeColor);
      const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shape.getSvgCode()}
        <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-size="30" fill="${answers.textColor}">${answers.text}</text>
      </svg>`;
      // Save SVG to file
      fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
      });
    });
}

createLogo();
