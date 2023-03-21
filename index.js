const {Circle, Triangle, Square} = require('./lib/shapes');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters:',
        validate: function(input) {
            if (input.length > 3) {
                return "Please enter up to 3 characters only"
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'text-colour',
        message: 'TEXT-COLOUR: Please enter a color keyword (OR a hexadecimal number)'
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
        message: 'Please select a shape'
    },
    {
        type: 'input',
        name: 'colour',
        message: 'SHAPE-COLOUR: Please enter a color keyword (OR a hexadecimal number)'
    } 
];

function writeToFIle(fileName, data) {

};

function init() {
    inquirer.prompt(questions)
    .then((res) => {
        console.log(res);
    })
};

init();