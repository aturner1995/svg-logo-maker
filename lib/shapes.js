class Shape {
    constructor(colour) {
        this.colour = colour;
    }    
};

class Circle extends Shape {
    render() {
        return `<circle cx='25' cy='25' r='20' fill='${this.colour}'>`
    }
};

class Square extends Shape {
    render() {
        return `<rect x=10 y=10 width=30 height=30 fill=${this.colour}`
    }

};

class Triangle extends Shape {
    render() {
        return `<polygon height=100% width=100% points=0,200 300,200 150,0 fill=${this.color}>`
    }
};

module.exports = {Circle, Square, Triangle};