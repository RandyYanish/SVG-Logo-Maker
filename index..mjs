import fs from 'fs';
import { promptsRun } from './inquirer.mjs';
import { Circle, Rectangle, Triangle } from './lib/shapes.mjs';

const prompts = [
    {
        type: 'input',
        message: 'message',
        name: 'input'
    },
    {
        type: 'password',
        message: 'What is your password?',
        name: 'password'
    }
];

function writeToFile(name, svgData) {
    fs.writeFile(name + 'svg', svgData, (err) => {
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