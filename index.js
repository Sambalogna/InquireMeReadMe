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
  ])
  .then((response)=> {
      console.log(response)

      // Title, Description(maybe choice of image and link),table of contents(Y OR N), installation, Usage, 
      //License, constributing guidelines, tests, Questions: enter githubuserName -> github profile, enter email -> how to contact
      const markdownFile = `#${title} \n
                            ##Description:\n
                            ${} \n 
                            ##Table of Contents\n
                            *[Installation](#Installation)\n
                            *[Usage](#Usage)\n
                            *[License](#License)\n
                            *[Contributing](#Contributing)\n
                            *[Tests](#Tests)\n
                            *[Questions](#Questions)\n
                            ##Installation\n
                            ${} \n
                            ##Usage:\n
                            ${} \n 
                            ##License:\n
                            ${} \n 
                            ##Contributing:\n
                            ${} \n 
                            ##Tests:\n
                            ${} \n 
                            ##Questions:\n
                            ${} \n 

                            `
  })