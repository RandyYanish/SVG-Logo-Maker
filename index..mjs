import fs from 'fs';
import { promptsRun } from './inquirer.mjs';
import { Circle, Rectangle, Triangle } from './lib/shapes.mjs';

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
        type: 'ipnut',
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

function writeToFile(fileName, svgData) {
    svgData = `
        <svg width="300" height="200">
            ${svgData}
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
    const shape = createShape(promptData.shapeChoice);
    shape.setColor(promptData.shapeColorChoice);
    svgData = shape.render();
    writeToFile(promptData.fileName, svgData);
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