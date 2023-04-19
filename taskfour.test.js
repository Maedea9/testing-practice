const capitalize = require('./taskfour');

test('capitalize function returns a string with first letter capitalized', () => {
    expect(capitalize('ecuador')).toBe('Ecuador'); 
});
