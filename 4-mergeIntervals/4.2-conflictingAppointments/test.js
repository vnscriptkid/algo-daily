const {findConflictingAppointments} = require('./index')

test('it works 1', () => {
  const arr = [
    [4, 5],
    [2, 3],
    [3, 6],
    [5, 7],
    [7, 8],
  ]
  const result = findConflictingAppointments(arr)
  expect(result).toEqual([
    [
      [4, 5],
      [3, 6],
    ],
    [
      [3, 6],
      [5, 7],
    ],
  ])
})
