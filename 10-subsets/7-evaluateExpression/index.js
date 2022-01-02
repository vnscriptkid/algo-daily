// Evaluate Expression

// Given an expression containing digits and operations (+, -, *),
// find all possible ways in which the expression can be evaluated by grouping the numbers and operators using parentheses.

// Input: "2*(3-4-5)"
// Output: 8, -12, 7, -7, -3

//           2 * 3 - 4 - 5
//      2*(3-4-5)           (2*3)-(4-5)             (2*3-4)-5
//       /      \                                  /        \
// 2*(3-(4-5))  2*((3-4)-5)                    (2*(3-4))-5  ((2*3)-4)-5

// [2]
// *
// [4, -6]
// [8, -12]

function evaluateExp(exp) {
  if (exp.length <= 3) return [eval(exp)]

  const result = []

  for (let i = 0; i < exp.length; i++) {
    if ('+-*'.includes(exp[i])) {
      let leftResult = evaluateExp(exp.substring(0, i))
      let rightResult = evaluateExp(exp.substring(i + 1))

      for (let x of leftResult) {
        for (let y of rightResult) {
          result.push(eval(`${x}${exp[i]}(${y})`))
          // 2--2
        }
      }
    }
  }

  return result
}

module.exports = {evaluateExp}
