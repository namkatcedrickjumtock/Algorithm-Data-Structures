
// ******Steps******** //
// 1- return error if input array is not an array obeject
// 2- iterate over the array


sortMaximumAmount = (rangeOfGirls) => {
    //return error if not an Array object
    if (!Array.isArray(rangeOfGirls)) {
        return "not an Array Object ):"
    }
    // hold sorted arrays from lowest to largest
    const sortedNumberOfGirls = []
    const sortedRangeOfGirls = []

    for (let i = 0; i < rangeOfGirls.length; i++) {

        // smallest assumed value
        let assumedSmallestValue = rangeOfGirls[0]
        let assumedSmallestIndex = 0

        for (let j = 0; j < rangeOfGirls.length; j++) {
            if (rangeOfGirls[j] <= assumedSmallestValue) {
                assumedSmallestValue = rangeOfGirls
                assumedSmallestIndex = rangeOfGirls[j]
            }
        }

        // push the first found smallest value on 1 iteration
        sortedNumberOfGirls.push(assumedSmallestValue)

    }

    return sortedNumberOfGirls;
}

// module.exports = sortMaximumAmount

console.log(sortMaximumAmount([2, 3, 1, 4, 6, 5, 7, 6, 8, 9, 10, 100]));
