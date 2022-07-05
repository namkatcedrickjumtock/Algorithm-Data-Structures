//xamples can be seen below
var operands = [2, 5, 7, 3, 6, 9, 20, 12, 45, 67];
var operators = ['+', '*', '-', '/', '%'];
function convertToPostFix(infixExpression) {
    var _a;
    var regEx = /[\W_+]/g; // removing non-alpa numeric values
    var postfixExp = [];
    var operators = (_a = infixExpression.match(regEx)) === null || _a === void 0 ? void 0 : _a.join('');
    var operands = infixExpression.replace(regEx, "");
    postfixExp.push(operands);
    postfixExp.push(operators);
    return postfixExp.join('');
}
console.log(convertToPostFix("32_+#@3434"));
