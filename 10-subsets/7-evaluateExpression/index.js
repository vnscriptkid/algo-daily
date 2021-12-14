function evaluateExp(exp) {
  let result = []

  if (exp.length <= 3) {
    result.push(eval(exp))
    return result
  }
  // 2 * 3 - 4 - 5
  for (let [idx, char] of exp.split('').entries()) {
    if (isNaN(char)) {
      const leftExp = exp.substring(0, idx)
      const rightExp = exp.substring(idx + 1)

      let leftResult, rightResult

      if (leftExp) {
        leftResult = evaluateExp(leftExp)
      }

      if (rightExp) {
        rightResult = evaluateExp(rightExp)
      }

      if (!leftResult) return rightResult
      if (!rightResult) return leftResult

      for (let leftNum of leftResult) {
        for (let rightNum of rightResult) {
          if (rightNum < 0) rightNum = `(${rightNum})`
          result.push(eval(`${leftNum}${char}${rightNum}`))
        }
      }
    }
  }

  return result
}

module.exports = {evaluateExp}
