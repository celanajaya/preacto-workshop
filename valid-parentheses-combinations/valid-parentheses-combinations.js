/*
1. openingLeft = n closing = 0
*/

function validParentheses(n) {
    var combos = [ ];
    function getCombinations(openNum,closingNum,curr) {
        if (openNum === 0 && closingNum === 0)
            combos.push(curr);
        if (openNum > 0) {
            getCombinations(openNum-1, closingNum + 1, curr + "(");
        }
        if (closingNum > 0) {
            getCombinations(openNum, closingNum - 1, curr + ")");
        }
    }
    getCombinations(n,0,"");
    return combos;

}

