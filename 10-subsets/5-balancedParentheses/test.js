const {generateBalancedParen} = require('./final')
const {generateBalancedParen: dfs} = require('./dfs')

test('it works 1', () => {
  const n = 3
  let result = generateBalancedParen(n)

  expect(result).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()'])

  result = dfs(n)

  expect(result).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()'])
})
