const {dutchFlag} = require('./index')

test('it works 1', () => {
  const arr = [1, 0, 2, 1, 0]
  dutchFlag(arr)
  expect(arr).toEqual([0, 0, 1, 1, 2])
})

test('it works 2', () => {
  const arr = [2, 2, 0, 1, 2, 0]
  dutchFlag(arr)
  expect(arr).toEqual([0, 0, 1, 2, 2, 2])
})
