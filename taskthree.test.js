const Calculator = require('./taskthree');

describe ('Calculator', () => {
    describe('add', () => {
        test('adds 2 + 2 to equal 4', () => {
            const calculator = new Calculator();
            expect(calculator.add(2, 2)).toBe(4);
        });
    });
});

describe ('Calculator', () => {
    describe('add', () => {
        test('adds - 10 + - 2 to equal -12', () => {
            const calculator = new Calculator();
            expect(calculator.add(-10, -2)).toBe(-12);
        });
    });
});

describe ('Calculator', () => {
    describe('add', () => {
        test('adds 0.5 + 0.3 to equal 0.8', () => {
            const calculator = new Calculator();
            expect(calculator.add(0.5, 0.3)).toBe(0.8);
        });
    });
});

describe ('Calculator', () => {
    describe('substract', () => {
        test('substract 5 - 3 to equal 2', () => {
            const calculator = new Calculator();
            expect(calculator.subtract(5, 3)).toBe(2);
        });
    });
});

describe ('Calculator', () => {
    describe('substract', () => {
        test('substract - 5 -  - 3 to equal - 2', () => {
            const calculator = new Calculator();
            expect(calculator.subtract(- 5, - 3)).toBe(- 2);
        });
    });
});

describe ('Calculator', () => {
    describe('substract', () => {
        test('substract 1.9 - 0.5 to equal 1.4', () => {
            const calculator = new Calculator();
            expect(calculator.subtract(1.9, 0.5)).toBe(1.4);
        });
    });
});

describe ('Calculator', () => {
    describe('multiply', () => {
        test('multiply 5 * 5 to equal 25', () => {
            const calculator = new Calculator();
            expect(calculator.multiply(5, 5)).toBe(25);
        });
    });
});

describe ('Calculator', () => {
    describe('multiply', () => {
        test('multiply -5 * 5 to equal - 25', () => {
            const calculator = new Calculator();
            expect(calculator.multiply(-5, 5)).toBe(-25);
        });
    });
});

describe ('Calculator', () => {
    describe('multiply', () => {
        test('multiply 5 * 5 to equal 25', () => {
            const calculator = new Calculator();
            expect(calculator.multiply(5, 5)).toBe(25);
        });
    });
});
describe ('Calculator', () => {
    describe('multiply', () => {
        test('multiply 0.5 * 0.5 to equal 0.25', () => {
            const calculator = new Calculator();
            expect(calculator.multiply(0.5, 0.5)).toBe(0.25);
        });
    });
});

describe ('Calculator', () => {
    describe('divide', () => {
        test('divide 10 / 2 to equal 5', () => {
            const calculator = new Calculator();
            expect(calculator.divide(10, 2)).toBe(5);
        });
    });
});

describe ('Calculator', () => {
    describe('divide', () => {
        test('divide 0 / 2 to equal 0', () => {
            const calculator = new Calculator();
            expect(calculator.divide(0, 2)).toBe(0);
        });
    });
});

describe ('Calculator', () => {
    describe('divide', () => {
        test('divide 1/2 / 1/3 to equal 1.5', () => {
            const calculator = new Calculator();
            expect(calculator.divide(1/2, 1/3)).toBe(1.5);
        });
    });
});