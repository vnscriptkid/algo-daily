const {findNextLetter} = require('./index')

test('it works 1', () => {
  const chars = ['a', 'c', 'f', 'h'],
    key = 'f'
  const result = findNextLetter(chars, key)
  expect(result).toEqual('h')
})

test('it works 2', () => {
  const chars = ['a', 'c', 'f', 'h'],
    key = 'b'
  const result = findNextLetter(chars, key)
  expect(result).toEqual('c')
})

// test('it works 3', () => {
//   const chars = ['a', 'c', 'f', 'h'],
//     key = 'm'
//   const result = findNextLetter(chars, key)
//   expect(result).toEqual('a')
// })

// test('it works 4', () => {
//   const chars = ['a', 'c', 'f', 'h'],
//     key = 'h'
//   const result = findNextLetter(chars, key)
//   expect(result).toEqual('a')
// })
