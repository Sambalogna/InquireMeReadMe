const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
      {
          type: 'input',
          message: 'What is the title of your project?',
          name: 'title'
      },
      {
        type: 'input',
        message: 'Describe your project?',
        name: 'description'
      },
      {
        type: 'input',
        message: 'How does a user install your project?',
        name: 'installation'
      },
      {
        type: 'input',
        message: 'Usage information?',
        name: 'usage'
      },
      {
        type: 'checkbox',
        message: 'What license will you use?',
        name: 'license',
        choices: ['The MIT License', 'Apache 2.0 License','GNU General Public License v3.0']
      },
      {
        type: 'input',
        message: 'What are your contributing guidelines?',
        name: 'contributing'
      },
      {
        type: 'input',
        message: 'Does your project have tests?',
        name: 'tests'
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'githubUser'
      },
      {
        type: 'input',
        message: 'What email address can be used to contact you about your project?',
        name: 'email'
      },
  ])
  .then((response)=> {
    if(response.license =='The MIT License') {
        var licenseBadge = `[!['License: MIT'](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      }  
    else if(response.license == 'Apache 2.0 License'){
        var licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if(response.license == 'GNU General Public License v3.0'){
        var licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
    else{
        console.log('No License?')
    }
      // Title, Description(maybe choice of image and link),table of contents(Y OR N), installation, Usage, 
      //License, constributing guidelines, tests, Questions: enter githubuserName -> github profile, enter email -> how to contact
const markdownFile = `# ${response.title} ${licenseBadge} \n
## Description:\n
${response.description} \n 
## Table of Contents\n
* [Installation](#Installation)\n
* [Usage](#Usage)\n
* [License](#License)\n
* [Contributing](#Contributing)\n
* [Tests](#Tests)\n
* [Questions](#Questions)\n
## Installation\n
${response.installation} \n
## Usage:\n
${response.usage} \n 
## License: ${licenseBadge}\n
This project is covered under the ${response.license} \n 
## Contributing:\n
${response.contributing} \n 
## Tests:\n
${response.tests} \n 
## Questions:\n
Here is my Github profile [My Github](https://github.com/${response.githubUser})\n 
Any Questions? Contact here: ${response.email}\n
                            `
  //title is appended to the file name to give each user a unique filename                          
  fs.writeFile('readme.md', markdownFile, (err)=>
  err ? console.error(err) : console.log('Your ReadMe has beeen created.'))
  });