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
    let svgData = '';
    svgData = ``

    fs.writeFile(fileName + '.svg', svgData, (err) => {
        if (err) throw (err);
        console.log('Responses were written to new html file');
    });
};

async function run() {
    const promptData = await promptsRun(prompts);
    console.log(promptData);
    writeToFile(promptData.name, promptData.svgData)
};

run();