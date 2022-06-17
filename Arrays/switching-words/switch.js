// //----------
// Store a set of words in an array and display the contents both forward and backward.
// --------------//

function SwitchStringBackAndForth(stringOfArray, bol) {

    let switchStringsBackWord = []
    if (bol) {
        for (const elements of stringOfArray) {
            switchStringsBackWord.unshift(elements)
        }

        return switchStringsBackWord.join('')
    }
    return stringOfArray
}


module.exports = SwitchStringBackAndForth