const { Circle, Triangle, Rectangle } = require('./shapes.mjs');

describe('Shapes', () => {
    describe('Circle', () => {
        it('should render a circle shape with a specified color', () => {
            const shape = new Circle();
            shape.setColor('red');
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        });
    });

    describe('Rectangle', () => {
        it('should render a rectangle shape with a specified color', () => {
            const shape = new Rectangle();
            shape.setColor('green');
            expect(shape.render()).toEqual('<rect x="10" y="10" width="280" height="180" fill="green" />');
        });
    });

    describe('Triangle', () => {
        it('should render an equilateral triangle shape with a specified color', () => {
            const shape = new Triangle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<polygon points="100,0 200,173.2 0,173.2" fill="blue" />');
        });
    });
});