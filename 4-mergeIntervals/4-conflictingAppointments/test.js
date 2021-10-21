const {canAttendAllAppointments} = require('./index')

test('it works 1', () => {
  const arr = [
    [6, 7],
    [2, 4],
    [8, 12],
  ]
  const result = canAttendAllAppointments(arr)
  expect(result).toEqual(true)
})

test('it works 2', () => {
  const arr = [
    [4, 5],
    [2, 3],
    [3, 6],
  ]
  const result = canAttendAllAppointments(arr)
  expect(result).toEqual(false)
})

test('it works 3', () => {
  const arr = [
    [1, 4],
    [2, 5],
    [7, 9],
  ]
  const result = canAttendAllAppointments(arr)
  expect(result).toEqual(false)
})
