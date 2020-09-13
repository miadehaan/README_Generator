var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt([
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
            message: "Please provide usage information: ",
            name: "usage"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        { 
            type: "input",
            message: "Please provide contribution guidelines: ",
            name: "contribution"
        },
        {
            type: "input",
            message: "Please provide test instructions: ",
            name: "test instructions"

        }
    ])
    .then(function(response) {
        // Call function to write the file
        // writeToFile(fileName, data);

        // Create badge specific to repo: https://shields.io

    });

}

// function call to initialize program
init();

