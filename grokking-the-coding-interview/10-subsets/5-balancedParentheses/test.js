const {generateBalancedParen} = require('./final')
const {generateBalancedParen: dfs} = require('./dfs')
const {generateBalancedParen: bfs} = require('./bfs')

test('it works 1', () => {
  const n = 3
  let result = generateBalancedParen(n)

  expect(result).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()'])

  result = dfs(n)

  expect(result).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()'])

  result = bfs(n)

  expect(result).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()'])
})
