const {Circle, Square, Triangle} = require('../lib/shapes');

describe('Triangle', () => {
    it('Renders a Triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="blue"/>');
    })
});

describe('Circle', () => {
    it('Renders a Circle', () => {
        const shape = new Circle();
        shape.setColor('black');
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="black"/>`);
    })
});

describe('Square', () => {
    it('Renders a Square', () => {
        const shape = new Square();
        shape.setColor('yellow');
        expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="yellow"/>`);
    })
});