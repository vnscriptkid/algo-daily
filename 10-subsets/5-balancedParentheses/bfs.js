// Balanced Parentheses
// For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

// Input: N=3
// Output: ((())), (()()), (())(), ()(()), ()()()

class Paren {
  constructor(str, open, close) {
    this.str = str
    this.open = open
    this.close = close
  }
}

function generateBalancedParen(n) {
  const queue = []
  queue.push(new Paren('', 0, 0))

  const output = []

  while (queue.length) {
    let levelSize = queue.length

    while (levelSize > 0) {
      const {str, open, close} = queue.shift()

      if (open + close === 2 * n) {
        output.push(str)
        break
      }

      if (open < n) {
        queue.push(new Paren(str + '(', open + 1, close))
      }

      if (open > close) {
        queue.push(new Paren(str + ')', open, close + 1))
      }

      levelSize--
    }
  }

  return output
}

module.exports = {generateBalancedParen}
