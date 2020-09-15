var inquirer = require("inquirer");
var fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile); // make a promise

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a description of your project: ",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation"
    },
    {
        type: "input",
        message: "How will this project be used?",
        name: "usage"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
    },
    { 
        type: "input",
        message: "Who contributed to this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the test instructions for this project?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your Github email address?",
        name: "email"
    }

];

// function to write README file
function writeToFile(response) {
    // Use Template Literals to write in the README file
return `# ${response.title}

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

[![License]${badge(response.license)}


## Description 
${response.description}

## Table of Content
-[description](#Description)
-[installation](#Installation)
-[usage](#Usage)
-[license](#License)
-[contribution](#Contribution)
-[test](#Test)
-[questions](#Questions)

## Installation
${response.installation}
    
## Usage
${response.usage}
    
## License
This application is covered under the ${response.license} license.
    
## Contributing
${response.contribution}
    
## Test
${response.test}
    
## Questions
If you have any questions, please contact me at the email below. Check out my Github portfolio for more of my projects!

Github Username: ${response.username}
Github Link: (https://${response.username}.github.io/)
Github Email: (${response.email})

`;

}

function badge(license) {
    // Create license badges:
    const badgeURL = '';

    if (license === 'MIT') {
        badgeURL = "(https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
    }
    else if (license === 'APACHE 2.0') {
        badgeURL = "(https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (license === 'GPL 3.0') {
        badgeURL = "(https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/gpl-license)";
    }
    else if (license === 'BSD 3') {
        badgeURL = "(https://img.shields.io/badge/License-BSD%203-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }
    else {
    }

    return badgeURL;
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then( (response) => {
        // Write file w/ user answers
        console.log(response);

        // Call function to write the file
        const readme = writeToFile(response);
        return writeFileAsync("README.md", readme);



        // Create badge specific to repo: https://shields.io

    })
    .then(function() {
        // Promise received
        console.log("Successfully wrote to README.md");
    })
    .catch(function(err) {
        // Promise rejected
        console.log(err);    
    });

}

// function call to initialize program
init();

