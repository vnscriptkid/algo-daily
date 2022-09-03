const {findKInRow} = require('.')

test('it works', () => {
  const result = findKInRow('youtttube', 3)
  expect(result).toBe(3)
})
