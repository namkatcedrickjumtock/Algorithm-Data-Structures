

function StackFactorial(factorial) {

    let stackList = []
    while (factorial > 1) {
        stackList.push(factorial--)
    }
    let product = 1

    while (stackList.length > 0) {
        product *= stackList.pop()
    }
    return product
}

// Nnormal factorial fxn

function NormalFactorials(factorial) {
    if (factorial === 0) {
        return 1
    }

    return factorial * NormalFactorials(factorial - 1)
}

console.log(StackFactorial(5));
console.log(NormalFactorials(5));
