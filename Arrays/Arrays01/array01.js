// excercis 1

// Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.



const addStudentsmarks = (arrys) => {

    let sum
    let avg

    let legnth = arrys.length

    sum = arrys.reduce((elem1, elem2) => elem1 + elem2)

    for (const indx in arrys) {

        avg = sum / legnth
    }
    return `the Average is ${Math.floor(avg)} and Makes is :${sum}`;
}

module.exports = addStudentsmarks