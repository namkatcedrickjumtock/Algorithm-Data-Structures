//xamples can be seen below
let operands: number[] = [2, 5, 7, 3, 6, 9, 20, 12, 45, 67]

const operators: string[] = ['+', '*', '-', '/', '%']


function convertToPostFix(infixExpression: string) {

    const regEx = /[\W_+]/g // removing non-alpa numeric values

    let postfixExp: string[] = []

    const operators: string = infixExpression.match(regEx)?.join('')!

    const operands = infixExpression.replace(regEx, "")

    postfixExp.push(operands)

    postfixExp.push(operators)

    return postfixExp.join('')
}



console.log(convertToPostFix("32_+#@3434"));