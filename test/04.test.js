const leapYear = require('../src/04')

test(' leapYear 2012 = true', () => {
    expect(leapYear(2012)).toBe(true)
});