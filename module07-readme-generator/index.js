import inquirer from 'inquirer';  // import Inquirer package for prompts
import fs from 'fs';              // import file system module to write files
import path from 'path';          // import path module to handle directory paths

// Questions array for user input prompts
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is the app used?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Create license badge markdown based on user choice
function renderLicenseBadge(license) {
  if (license === 'None') return '';  // no badge if no license
  const badges = {
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)', // MIT badge
    GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)', // GPLv3 badge
    'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)', // Apache 2.0 badge
  };
  return badges[license] || '';  // return badge string or empty
}

// Create license section text
function renderLicenseSection(license) {
  if (license === 'None') return 'This project is not licensed.';  // no license notice
  return `This project is licensed under the ${license} license.`;  // license notice
}

// Generate Table of Contents with links
function generateTableOfContents() {
  return `
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
`;
}

// Generate full README markdown content
function generateReadMe(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

${generateTableOfContents()}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions, please contact me via GitHub: [${data.github}](https://github.com/${data.github})  
Or email me at: ${data.email}
`;
}

// Write README.md file asynchronously inside the Output folder
function writeToFile(fileName, data) {
  const dir = path.join(process.cwd(), 'Output'); // path to Output folder in current working directory
  if (!fs.existsSync(dir)) {                       // check if Output folder exists
    fs.mkdirSync(dir);                             // create Output folder if it doesn't exist
  }
  const filePath = path.join(dir, fileName);      // full path to file inside Output folder
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);  // print error if write fails
    } else {
      console.log(`README.md generated successfully in Output folder!`);  // success message
    }
  });
}

// Initialize app by prompting user and writing README
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadMe(answers);  // create README content string
    writeToFile('README.md', readmeContent);        // write content to Output/README.md
  });
}

// Run the app
init();
