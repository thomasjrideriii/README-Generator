const questions = [
{
    type: "input",
    message: "What is your Github username?",
    name: "username"
}
{
    type: "input",
    message: "What is your email?",
    name: "userEmail"
}
{
    type: "input",
    message: "What is the url to your project?",
    name: "siteURL"
}
{
    type: "input",
    message: "Please describe your project in a few short lines.",
    name: "description"
}
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
}
{
    type: "input",
    message: "What command should run to install dependencies?",
    name: "install"
}
{
    type: "input",
    message: "What command should be run to test the code?",
    name: "test"
}
{
    type: "input",
    message: "What does the user need to know to operate this repo?",
    name: "usage"
}
{
    type: "input",
    message: "What does the user need to know about contributing to this repo?",
    name: "contribution"
}
];

function writeToFile(fileName, data) {

    `# Title

    ![Licencing Icon](https://img.shields.io/static/v1?label=License&message=Licence&color=green)
    
    ## Description
    
    Placeholder Text!
    
    ## Table of Contents
    
    * [Installation](##Installation)
    * [Usage](##Usage)
    * [License](##License)
    * [Contributing](##Contributing)
    * [Tests](##Tests)
    * [Questions](##Questions)
    
    ## Installation
    
    To install dependencies, please run the following code:
    
    
        node i
    
    
    ## Usage
    
    Placeholder Text!
    
    ## License
    
    This project is licensed under . . . . 
    
    ## Contributing
    
    Placeholder Text
    
    ## Tests
    
    To test, please run the following code:

    
        node test
    
    
    ## Questions
    
    For any questions or feedback, please contact [username](github.com/username) at <email@example.com>.`
}

function init() {

}

init();
