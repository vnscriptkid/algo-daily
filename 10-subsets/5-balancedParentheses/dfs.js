// Balanced Parentheses
// For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

// Input: N=3
// Output: ((())), (()()), (())(), ()(()), ()()()

function generateBalancedParen(n, open = 0, close = 0, cur = '', all = []) {
  // base case
  // open === n, close === n
  if (open === n && close === n) {
    all.push(cur)
    return
  }

  const next = []
  if (open === n) {
    // case 1: open === n => next is close
    next.push(')')
  } else if (open > close) {
    // case 2: open > close => next can be open or close
    next.push('(')
    next.push(')')
  } else if (open === close) {
    // case 3: open === close => next is open
    next.push('(')
  }

  for (let choice of next) {
    if (choice === '(') {
      generateBalancedParen(n, open + 1, close, cur + choice, all)
    } else {
      generateBalancedParen(n, open, close + 1, cur + choice, all)
    }
  }

  return all
}

module.exports = {generateBalancedParen}
