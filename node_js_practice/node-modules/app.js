const validator = require('validator');
const chalk = require('chalk');



console.log(validator.isEmail("andrew"));

console.log(chalk.green("Success"));

console.log(chalk.red.bold.underline.inverse('Hello', 'world'));
console.log(chalk.inverse('Hello!'));
console.log("Hello");

// if we delete node_modules folder so how can we recover .
// using npm install commannpm install chalkd we can recover it . it reads pacakage json file and install dependencies back to the project


// if install npm dependencies so use npm install nodemon@1.18.5 -g (where -g is globally)
// so it install dependencies in operating system not for only the single project
// run nodemon use nodemon file name 