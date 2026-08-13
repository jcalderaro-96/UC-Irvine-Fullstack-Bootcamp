const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

inquirer
  .prompt([
    { type: 'input', name: 'title', message: 'Project title?' },
    { type: 'input', name: 'description', message: 'Project description?' },
    { type: 'input', name: 'installation', message: 'Installation instructions?' },
    { type: 'input', name: 'usage', message: 'Usage information?' },

    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache 2.0', 'GPL v3', 'BSD 3-Clause', 'None'],
    },

    { type: 'input', name: 'contributing', message: 'Contributing guidelines?' },
    { type: 'input', name: 'tests', message: 'Test instructions?' },
    { type: 'input', name: 'github', message: 'GitHub username?' },
    { type: 'input', name: 'email', message: 'Email address?' },
  ])
  .then((answers) => {
    const markdown = generateMarkdown(answers);
    fs.writeFileSync('sample-README/README.md', markdown);
    console.log('README generated!');
  });
