// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
);
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
        ])
        .then((response) => {
            const md = genMarkdown.generateMarkdown(response);
            writeToFile("README.md", md);
        });
}
// Function call to initialize app
init();
