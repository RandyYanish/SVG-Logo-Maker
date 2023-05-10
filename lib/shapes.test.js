const { Circle, Triangle, Rectangle } = require('./shapes.js');

describe('Shapes', () => {
    describe('Circle', () => {
        it('should render a circle shape with a specified color', () => {
            const shape = new Circle();
            shape.setColor('red');
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
        });
    });

    describe('Rectangle', () => {
        it('should render a rectangle shape with a specified color', () => {
            const shape = new Rectangle();
            shape.setColor('green');
            expect(shape.render()).toEqual('<rect x="100" y="75" width="100" height="50" fill="green" />');
        });
    });

    describe('Triangle', () => {
        it('should render an equilateral triangle shape with a specified color', () => {
            const shape = new Triangle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<polygon points="150,50 100,150 200,150" fill="blue" />');
        });
    });
});
