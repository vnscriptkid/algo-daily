// Balanced Parentheses
// For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

// Input: N=3
// Output: ((())), (()()), (())(), ()(()), ()()()

// queue:    ['']

//           ['(']

//  [  '((', '()'    ]

// [ '(((', '(()', '()('  ] 3 strings

// ['((()', '(()(', '(())', '()((', '()()'  ]: 5 strings

// ['((())', '(()()', '(())(', '()(()', '()()('  ]: 5 strings

// ['((()))', '(()())', '(())()', '()(())', '()()()'  ]

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
    // process all strings of prev level
    let levelSize = queue.length
    while (levelSize > 0) {
      const {str, open, close} = queue.shift()
      levelSize--

      if (str.length === n * 2) {
        output.push(str)
        continue
      }

      // build up new str, add back to queue
      // open === close => (
      // open === n => )
      // open > close => (, )

      if (open < n) {
        queue.push(new Paren(str + '(', open + 1, close))
      }

      if (open > close) {
        queue.push(new Paren(str + ')', open, close + 1))
      }
    }
  }

  return output
}

module.exports = {generateBalancedParen}
