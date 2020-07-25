const mebiToKibi = require('../src/03.js')

test('mebiToKibi 1 = 1024', () => {
    expect(mebiToKibi(1)).toBe(1024)
});

