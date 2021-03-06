// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?',
'Give a description of your project.',
'What are the steps required to install your project?',
'Provide instructions and examples for use.',
'Choose a license', 'Would you like to add a contributor covenant?',
'Go the extra mile and write tests for your application. Then provide examples on how to run them.',
'Enter in your email address for contact','Enter in your Github profile URL'];

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
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'list',
                message: questions[4],
                name: 'license',
                choices: ['Apache License 2.0','GNU General Public License v3.0','MIT License',
                'Boost Software License 1.0','Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0'],
            },
            {
                type: 'input',
                message: questions[5],
                name: 'contribution',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'test',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'email',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'github',
            },

        ])
        .then((response) => {
            console.log ("response: ",response);
            const markdown = generateMarkdown(response);
            writeToFile("README.md", markdown);
        });
}
// Function call to initialize app
init();
