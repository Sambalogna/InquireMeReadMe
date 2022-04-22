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
        type: 'input',
        message: 'What license did you use?',
        name: 'license'
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
                            ${githubUser} \n 
                            ${email}\n
                            `
  //title is appended to the file name to give each user a unique filename                          
  fs.writeFile(`${title}readme.md`, markdownFile, (err)=>
  err ? console.error(err) : console.log('Your ReadMe has beeen created.'))
  });