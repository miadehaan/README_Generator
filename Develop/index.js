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
        name: "installation instructions"
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
        message: "What is the name of the user?",
        name: "userName"
    },
    {
        type: "input",
        message: "What is your Github email address?",
        name: "githubEmail"
    }

];

// function to write README file
function writeToFile(response) {
    // Use Template Literals to write in the README file
    return `
    # ${response.title}

    #Description 
    ${response.description}

    # Table of Content
    -[description](#description)
    -[installation](#installation)
    -[usage](#usage)
    -[licenses](#licenses)
    -[contribution](#contribution)
    -[test](#test)
    -[username](#username)
    -[githubEmail](#githubEmail)

    #Installation
    
    #Usage
    
    #License
    
    #Contributing
    
    #Tests
    
    #Questions


    `;

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

