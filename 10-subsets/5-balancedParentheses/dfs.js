// Balanced Parentheses
// For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

// Input: N=3
// Output: ((())), (()()), (())(), ()(()), ()()()

//    ''

//            '('            can't start with ')'

// '(('               '()'

// '((('  '(()'      '()('   => can't add ) if #( === #)

// '((()'  '(()('  '(())'   '()(('  '()()'            => if #( === n, can only add )
//                                                    => if #( > #) => 2 choices

// '((())' '(()()'  '(())('  '()(()' '()()('

// '((()))' '(()())'  '(())()' '()(())' '()()()'

function generateBalancedParen(n, cur = '', open = 0, close = 0, all = []) {
  // base case
  if (cur.length === n * 2) {
    all.push(cur)
    return
  }

  // generally, 2 choices
  // 1. add (
  // 2. add )

  // case 1: open === close => (
  if (open === close) {
    generateBalancedParen(n, cur + '(', open + 1, close, all)
  }
  // case 2: open === n => )
  else if (open === n) {
    generateBalancedParen(n, cur + ')', open, close + 1, all)
  }
  // case 3: open > close => 2 choices
  else if (open > close) {
    generateBalancedParen(n, cur + '(', open + 1, close, all)
    generateBalancedParen(n, cur + ')', open, close + 1, all)
  }

  return all
}

module.exports = {generateBalancedParen}
