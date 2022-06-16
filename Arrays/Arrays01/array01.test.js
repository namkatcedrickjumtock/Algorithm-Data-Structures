const addStudents = require('./array01.js')


it('should return the Average and of the operation', () => {
    expect(addStudents([2, 67, 92, 6, 4])).toBe(`the Average is ${34} and Makes is :${171}`)
});