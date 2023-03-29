const {Circle, Triangle, Square} = require('./lib/shapes');
const inquirer = require('inquirer');
const Svg = require('./lib/svg');
const fs = require('fs');
// Questions for user response
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters:',
        validate: function(input) {
            if (input.length > 3 || input.length === 0) {
                return "Please enter up to 3 characters only"
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'TEXT-COLOR: Please enter a color keyword (OR a hexadecimal number)'
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
        message: 'Please select a shape'
    },
    {
        type: 'input',
        name: 'color',
        message: 'SHAPE-COLOR: Please enter a color keyword (OR a hexadecimal number)'
    } 
];
// Writes the logo.svg file & if there is an error it shows in the console
function writeToFIle(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.error(err) : console.log('Generated logo.svg')
    })
};
// Function to prompt user for their logo suggestions
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        let userShape;
        userText = res.text;
        textColor = res.textColor;
        userShapeType = res.shape;
        shapeColor = res.color;
        // Check the user shape submission 
        if (userShapeType === 'Circle') {
            userShape = new Circle();
        }
        else if (userShapeType === 'Square') {
            userShape = new Square();
        }
        else if (userShapeType === 'Triangle') {
            userShape = new Triangle();
        }
        userShape.setColor(shapeColor);
        const logo = new Svg(textColor, userText, userShape);

        const logoString = logo.render();
        writeToFIle('./dist/logo.svg', logoString);
    })
    .catch((err) => {
        console.error("You have an error in the results submisson", err);
    })
};

init();