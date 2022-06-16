// excercis 1

// Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.




// adding the marks

const addStudentsmarks = () => {

    let sum
    let avg

    const Studentmakrs = [2, 67, 92, 6, 4]

    let legnth = Studentmakrs.length

    sum = Studentmakrs.reduce((elem1, elem2) => elem1 + elem2)

    for (const indx in Studentmakrs) {
        avg = sum / legnth
    }
    return `the Average is ${avg} and Makes is :${sum}`;
}

console.log(addStudentsmarks());