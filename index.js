//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

//  an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Whats the title for your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Whats a good description for your project?',
  },
  {
    type: 'input',
    name: 'github',
    message: "What is your GitHub username?",
  },
  {
    type: 'input',
    name: 'email',
    message: "Whatis your email address?",
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license do you want? ',
    choices: ["MIT", "Apache 2.0", "GNU v3", "BSD 2-Clause"]
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should install the dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What should the users know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What should the users know about contributing to the repo?',
  },
  {
    type: 'input',
    name: 'thanks',
    message: 'Who would you like to give thanks to for this project?',
  },
]
  

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
 }

// TODO: Create a function to initialize app
function init() { 
inquirer.prompt(questions).then((inquirerResponses) =>{
  console.log("Your README has been generated, check your folder!");
  writeToFile('README.md', generateMarkdown({...inquirerResponses}));
});
}

// Function call to initialize app
init();
