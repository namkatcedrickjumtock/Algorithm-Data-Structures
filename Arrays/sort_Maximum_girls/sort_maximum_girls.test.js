const sortMaximum = require('./sort_maximum_girls.js')

it('return sorted Arrays', () => {
    expect(sortMaximum([2, 3, 1, 4, 6, 5, 7, 6, 8,  10, 9])).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
});