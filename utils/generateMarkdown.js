function generateMarkdown(data) {
  return `
# ${data.title}

![Licencing Icon](https://img.shields.io/static/v1?label=License&message=${data.license}&color=green)

## Description

${data.decription}

## Table of Contents

* [Installation](##Installation)
* [Usage](##Usage)
* [License](##License)
* [Contributing](##Contributing)
* [Tests](##Tests)
* [Questions](##Questions)

## Installation

To install dependencies, please run the following code:


    ${data.install}


## Usage

${data.usage}

## License

This project is licensed under ${data.license}.

## Contributing

${data.contribution}

## Tests

To test, please run the following code:

    ${data.test}


## Questions

For any questions or feedback, please contact [${data.username}](github.com/${data.username}) at <${data.email}>.
`;
}

module.exports = {generateMarkdown: generateMarkdown};