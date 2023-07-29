// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License
${data.license}

## Description of Project

${data.description}

## Table of Contents

* [Installation](#installation)
* [Testing](#testing)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)
* [Thanks](#thanks)

## Installation

The command "${data.installation}" is used to install the nessary dependencies.

## Testing

To run tests, use the command "${data.test}".

## Usage

${data.usage}

## Contributing to the Repo

${data.contributing}

## Questions

Please feel free to reach out to me with any questions!

* ${data.github}
* ${data.email}

## Thanks

${data.thanks}
* Thank you for viewing this repo, please reach out if you have any other questions

`;
}

module.exports = generateMarkdown;
