const {Circle, Triangle, Square} = require('./lib/shapes');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters:'
    },
    {
        type: 'input',
        name: 'colour',
        message: 'Please enter '
    }
]