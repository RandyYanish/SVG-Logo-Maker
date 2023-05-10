class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return '';
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Rectangle extends Shape {
    render() {
        return `<rect x="10" y="10" width="280" height="180" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100,0 200,173.2 0,173.2" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Rectangle, Triangle };