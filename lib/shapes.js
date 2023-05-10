class Shape {
    constructor() {
        this.color = '#000000';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error('render() method must be implemented by subclass');
    }
}

class Circle {
    constructor() {
        this.color = 'black';
        this.radius = 50;
        this.cx = 150;
        this.cy = 100;
        this.logoText = '';
        }
    
        setColor(color) {
        this.color = color;
    }

    setLogoText(text) {
        this.logoText = text;
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Rectangle {
    constructor() {
        this.color = 'black';
        this.width = 100;
        this.height = 50;
        this.x = 100;
        this.y = 75;
        this.logoText = '';
    }

    setColor(color) {
        this.color = color;
    }

    setLogoText(text) {
        this.logoText = text;
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
}

class Triangle {
    constructor() {
        this.color = 'black';
        this.width = 100;
        this.height = 100;
        this.points = '150,50 100,150 200,150';
        this.logoText = '<text x="150" y="120" fill="${textColorChoice}" font-size="80" text-anchor="middle">${logoText}</text>';
    }

    setColor(color) {
        this.color = color;
    }

    setLogoText(text) {
        this.logoText = text;
    }

    render() {
        return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Rectangle, Triangle };
