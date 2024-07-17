// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
 
   {   
        type: 'input', 
        message: 'Enter the title of your project:', 
        name: 'title'

    }, 
    {
        type: 'input', 
        message: 'Enter a description of your project:', 
        name: 'description'
    },
    {
        type: 'input', 
        message: 'Enter your installation instructions:', 
        name: 'installation'

    }, 
    {
        type: 'input', 
        message: 'Enter usage instructions:', 
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Choose the license for your project:', 
        choices: ['Apache--2', 'GPL--3', 'MIT', 'BSD--2', 'BSD--3', 'BSL--1', 'EPL--2', 'AGPL--V3', 'GPL--2', 'LGPL--3', 'MPL--2', 'Unlicense'],
        name: 'license' 
    },

    {
        type: 'input', 
        message: 'Enter your contributors:',
        name: 'contributing'

    },

    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github'
    }

];


// TODO: Create a function to write README file
function writeToFile(filename, data) {

    fs.writeFile('Readme.md', data, (err) => 
        err? console.error(err) : console.log('README file created!'));
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((response) => {
    const readmeInput = 
` # ${response.title}

[![License](https://img.shields.io/badge/License-${response.license}-blue)](https://opensource.org/license/${response.license})

## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Contributing
${response.contributing}

## License
This project is licensed under the ${response.license} license. Please visit [License details](https://opensource.org/licenses/${response.license}) for more information

## Questions
If you  have any questions or need further assistance, please contact me at ${response.email} or visit my GitHub profile at https//github.com/[${response.github}]`



writeToFile('Readme.md', readmeInput);
 
}

);
    
}
// Function call to initialize app
init();
