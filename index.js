const fs = require('fs');
//const readMe = require('./SAMPLEREADME.MD');
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