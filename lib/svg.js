class Svg {
    constructor(color, text, shape) {
        this.text = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
        this.shape = shape.render();
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}${this.text} </svg>` 
    }
}

module.exports = Svg;