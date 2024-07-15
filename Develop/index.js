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
        message: 'Enter table of contents:', 
        name: 'tableOfContents'

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
        type: 'checkbox',
        message: 'Choose the license for your project:', 
        choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'None'], 
        name: 'license' 
    },

    {
        type: 'input', 
        message: 'Enter your contributors:',
        name: 'contributing'

    },
    {
        type: 'input',
        message: 'Enter your tests:',
        name: 'tests'
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

## License
This project is licensed under the ${response.license} license.

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
If you  have any questions or need further assistance, please contact me at ${response.email} or visit my GitHub profile at [${response.github}]`



writeToFile('Readme.md', readmeInput);
 
}

);
    
}
// Function call to initialize app
init();
