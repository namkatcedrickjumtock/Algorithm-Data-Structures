
// ******Speudocode******** //

// 0- Start
// 1- check if passed args is an array
//  if passedArray is not an Array return Error msg
// 2- declare a global variable to hold sorted elements of Array: sortedNumberOfGirls 
// 2-  for i in Arrays let assumedLowestValueInArray = first index of passed Arrays
// 3- second iteration: for j in inputArrays 
// 4- if element at inputArray at index [j] is less than or equal to assumedLowestValueInArray
// 5- assumedLowestValueInArray is equal to element at index[j] pf inputArray 
// 6- push assumedLowestValueInArray to sortedNumberOfGirls
// 7- pop or remove found assumedLowestValueInArray from original Array
// 8- return sortedNumberOfGirls
// 9- stop



sortMaximumAmount = (rangeOfGirls) => {
    //return error if not an Array object
    if (!Array.isArray(rangeOfGirls)) {
        return "not an Array Object ):"
    }
    // hold sorted arrays from lowest to largest
    const sortedNumberOfGirls = []

    // length of original Array
    let rangeOfGirlsLength = rangeOfGirls.length;

    for (let i = 0; i < rangeOfGirlsLength; i++) {

        // smallest assumed value
        let assumedSmallestValue = rangeOfGirls[0]
        let assumedSmallestIndex = 0

        for (let j = 0; j < rangeOfGirls.length; j++) {

            if (rangeOfGirls[j] <= assumedSmallestValue) {
                assumedSmallestValue = rangeOfGirls[j] 
                assumedSmallestIndex = j
            }
        }

        // push the first found smallest value on 1 iteration
        sortedNumberOfGirls.push(assumedSmallestValue)
        rangeOfGirls.splice(assumedSmallestIndex, 1)
    }

    return  sortedNumberOfGirls.join()
}

module.exports = sortMaximumAmount

console.log(sortMaximumAmount([2, 3, 1, 4, 6]));
console.log(sortMaximumAmount([21, 0, 9, 2, 6]));
console.log(sortMaximumAmount([8, 0, 1, 2, 6]));

