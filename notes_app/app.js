const util = require('./utils/utils');
const notes = require('./utils/notes')
const validator = require('validator');
const chalk =require('chalk');

console.log(notes());
console.log('app.js loaded');
console.log(validator.isEmail('mouli.chandira13@gmail.com'));
console.log(validator.isURL('https://gurupoojai.com'));
console.log(chalk.blue('HELLO IN BLUE!!'));
console.log(chalk.green('HELLO ON GREEN!!'));
console.log(chalk.bold.green('Success!!'));