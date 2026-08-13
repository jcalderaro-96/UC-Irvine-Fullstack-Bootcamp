function generateMarkdown(data) {
  // License badge based on user selection
  let licenseBadge = '';
  let licenseLink = '';
  
  // Set license badge and link based on the chosen license
  if (data.license === 'MIT') {
    licenseBadge = '![License](https://img.shields.io/badge/License-MIT-blue.svg)';
    licenseLink = 'https://opensource.org/licenses/MIT';
  } else if (data.license === 'Apache 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  } else if (data.license === 'GPL v3') {
    licenseBadge = '![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)';
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (data.license === 'BSD 3-Clause') {
    licenseBadge = '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
  }

  return `
  # ${data.title}
  
  ## License
  ${licenseBadge}
  This project is licensed under the [${data.license}](${licenseLink}) license.

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})  
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
