const repeatString = require('../src/06')

test(' repeat abc to 3 times', () => {
    expect(repeatString("abc", 3)).toBe("abcabcabc")
});