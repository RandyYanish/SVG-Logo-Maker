async function promptsRun(prompts) {
    const { default: inquirer } = await import('inquirer');

    const promptData = await inquirer.prompt(prompts);
    return promptData;
}

module.exports = { promptsRun };