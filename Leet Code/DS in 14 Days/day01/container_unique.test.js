const contains = require('./contain_unique')

it('redundant values should return false', () => {
    expect(contains([1, 2, 3, 4, 5, 5, 6])).toBe(true)
});