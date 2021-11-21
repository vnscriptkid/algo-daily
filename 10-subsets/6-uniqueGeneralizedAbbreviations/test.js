const {generateAbbreviations} = require('./index')

test('it works 1', () => {
  const word = 'BAT'
  const result = generateAbbreviations(word)
  // expect(result).toEqual(['3', '2T', '1A1', '1AT', 'B2', 'B1T', 'BA1', 'BAT'])
  expect(result).toEqual(['BAT', 'BA1', 'B1T', 'B2', '1AT', '1A1', '2T', '3'])
})
