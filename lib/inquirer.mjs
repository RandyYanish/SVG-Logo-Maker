import inquirer from 'inquirer';

export const promptsRun = async (prompts) => {
    const { promptData } = await inquirer.prompt(prompts);
    return promptData;
};