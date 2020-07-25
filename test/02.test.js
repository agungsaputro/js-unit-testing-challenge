const functions = require('../src/02')

test(' add 4 + 2 = 6', () => {
    expect(functions.add(4,2)).toBe(6)
});