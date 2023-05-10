const fs = require('fs');
const { promptsRun } = require('./lib/inquirer.js');
const { Circle, Triangle, Rectangle } = require('./lib/shapes.js');

const prompts = [
    {
        type: 'input',
        message: 'What would you like to call this file?',
        name: 'fileName'
    },
    {
        type: 'input',
        message: 'What text would you like to display on the logo? (Max 3 characters)',
        name: 'logoText'
    },
    {
        type: 'input',
        message: 'What color would you like your text to be? (keyword or hexadecimal number)',
        name: 'textColorChoice'
    },
    {
        type: 'list',
        message: 'What shape would you like the logo to be?',
        choices: ['Circle', 'Rectangle', 'Triangle'],
        name: 'shapeChoice'
    },
    {
        type: 'input',
        message: 'What color would you like your shape to be? (keyword or hexadecimal)',
        name: 'shapeColorChoice'
    }
];

function createShapeWithText(shapeChoice, logoText) {
    const shape = createShape(shapeChoice);
    shape.setLogoText(logoText);
    return shape;
}

function writeToFile(fileName, svgData, logoText, textColorChoice) {
    const logoTextSvg = `
        <text x="150" y="120" fill="${textColorChoice}" font-size="80" text-anchor="middle">${logoText}</text>
        `;

    svgData = `
        <svg width="300" height="200">
            ${svgData}
            ${logoTextSvg}
        </svg>
    `;

    const filePath = `./examples/${fileName}.svg`;

    fs.writeFile(filePath, svgData, (err) => {
        if (err) throw err;
        console.log(`Responses were written to ${filePath}`);
    });
}

async function run() {
    const promptData = await promptsRun(prompts);
    console.log(promptData);
    let svgData = '';
    const shape = createShapeWithText(promptData.shapeChoice, promptData.logoText);
    shape.setColor(promptData.shapeColorChoice);
    svgData = shape.render();
    writeToFile(promptData.fileName, svgData, promptData.logoText, promptData.textColorChoice);
};

function createShape(shapeChoice) {
    switch (shapeChoice) {
        case 'Circle':
            return new Circle();
        case 'Rectangle':
            return new Rectangle();
        case 'Triangle':
            return new Triangle();
        default:
            throw new Error(`Invalid shape choice: ${shapeChoice}`);
    }
}

run();