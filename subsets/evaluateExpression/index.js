function evaluateExp(expression) {
  // base case
  if (expression.length === 1) return [parseInt(expression)]
  if (expression.length === 3) return [eval(expression)]

  const result = []
  // loop every character
  for (let [index, char] of expression.split('').entries()) {
    // if it's operators, calculate left and right
    if ('+-*'.includes(char)) {
      const leftResult = evaluateExp(expression.substring(0, index))
      const rightResult = evaluateExp(expression.substring(index + 1))

      // merge left and right
      for (let left of leftResult) {
        for (let right of rightResult) {
          if (parseInt(right) < 0) right = `(${right})`
          result.push(eval(`${left}${char}${right}`))
        }
      }
    }
  }

  return result
}

module.exports = {evaluateExp}
