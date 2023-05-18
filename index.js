const fs = require('fs');
const readMe = fs.readFileSync('./SAMPLEREADME.MD', 'utf-8');
const inquirer = require('inquirer');

inquirer
.prompt([
    {
    type: 'input',
    message: 'What is your title?',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Please provide a short description?',
    name: 'desc',
    },
    {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'install',
    },
    {
    type: 'input',
    message: 'Provide instructions and examples for use. Include screenshots as needed.\n To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.\n Then, using the relative filepath, add it to your README with this syntax, "![alt text](assets/images/screenshot.png)"\n',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'List your collaborators, if any, with links to their GitHub profiles.',
    name: 'credits',
    },
    {
    type: 'list',
    name: 'license',
    message: 'Select the project license:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0']
    },
    {
    type: 'input',
    message: 'If your project has a lot of features, list them here.',
    name: 'features',
    },
    {
    type: 'input',
    message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
    name: 'contribute',
    },
    
])
.then((response) =>{
    const newContent = readMe

fs.writeFileSync('test_README.md', newContent, 'utf-8'), function (err)
    {
      if (err) {
        console.log(err);
      } else {
        console.log("Logged!")
      }
    }
});