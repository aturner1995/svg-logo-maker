const Svg = require('../lib/svg');
const {Circle, Square, Triangle} = require('../lib/shapes');

describe('Svg', () => {
    it('Renders an SVG Image Circle', () => {
        const shape = new Circle();
        shape.setColor('black');
        const logo = new Svg('white', 'AJT', shape);
        expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="100" fill="black"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">AJT</text> </svg>`)
    })
});

describe('Svg', () => {
    it('Renders an SVG Image Square', () => {
        const shape = new Square();
        shape.setColor('black');
        const logo = new Svg('white', 'AJT', shape);
        expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" width="200" height="200" fill="black"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">AJT</text> </svg>`)
    })
});

describe('Svg', () => {
    it('Renders an SVG Image Triangle', () => {
        const shape = new Triangle();
        shape.setColor('black');
        const logo = new Svg('white', 'AJT', shape);
        expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,200 300,200 150,0" fill="black"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">AJT</text> </svg>`)
    })
});