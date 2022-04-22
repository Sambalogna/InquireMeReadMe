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
                            ${description} \n 
                            ##Table of Contents\n
                            *[Installation](#Installation)\n
                            *[Usage](#Usage)\n
                            *[License](#License)\n
                            *[Contributing](#Contributing)\n
                            *[Tests](#Tests)\n
                            *[Questions](#Questions)\n
                            ##Installation\n
                            ${installation} \n
                            ##Usage:\n
                            ${usage} \n 
                            ##License:\n
                            ${license} \n 
                            ##Contributing:\n
                            ${contributing} \n 
                            ##Tests:\n
                            ${tests} \n 
                            ##Questions:\n
                            ${questions} \n 

                            `
  fs.writeFile(`${}readme.md`, markdownFile, (err)=>
  err ? console.error(err) : console.log('Your ReadMe has beeen created.'))
  });