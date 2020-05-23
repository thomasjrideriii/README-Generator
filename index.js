const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

const fs = require("fs");

let markdownText = "";

const questions = [
{
    type: "input",
    message: "What is your Github username?",
    name: "username"
},
{
    type: "input",
    message: "What is your email?",
    name: "userEmail"
},
{
    type: "input",
    message: "What is the url to your project?",
    name: "siteURL"
},
{
    type: "input",
    message: "What is your project's name?",
    name: "title"
},
{
    type: "input",
    message: "Please describe your project in a few short lines.",
    name: "description"
},
{
    type: "list",
    message: "What licensing will your project use?",
    choices: [
        "MIT",
        "MPL",
        "Apache",
        "BSD-2",
        "BSD-3"
    ],
    name: "license"
},
{
    type: "input",
    message: "What command should run to install dependencies?",
    name: "install"
},
{
    type: "input",
    message: "What command should be run to test the code?",
    name: "test"
},
{
    type: "input",
    message: "What does the user need to know to operate this repo?",
    name: "usage"
},
{
    type: "input",
    message: "What does the user need to know about contributing to this repo?",
    name: "contribution"
}
];

function writeToFile(fileName, data) {

    fs.writeFile("constructedReadme/README.md", markdownText, function(err) {
        if (err) {
            return console.log (err);
        }
    }); 
}

function init() {

    inquirer.prompt(questions).then(function(response){
        var markdownData = response
        console.log(markdownData)
        markdownText = generateMarkdown.generateMarkdown(markdownData)
        console.log(markdownText)
    })

    
    
}

init();
