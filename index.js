const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

function createLogo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
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
        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <text x="10" y="20" fill="${answers.textColor}">${answers.text}</text>
        ${shapes[answers.shape](answers.shapeColor)}
      </svg>`;
    //   Save SVG to file
    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
    });
};