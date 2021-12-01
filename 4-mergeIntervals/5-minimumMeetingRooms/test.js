const {findMinMeetingRooms} = require('./index')

test('it works 1', () => {
  const meetings = [
    [1, 4],
    [2, 5],
    [7, 9],
  ]
  const result = findMinMeetingRooms(meetings)
  expect(result).toEqual(2)
})

test('it works 2', () => {
  const meetings = [
    [6, 7],
    [2, 4],
    [8, 12],
  ]
  const result = findMinMeetingRooms(meetings)
  expect(result).toEqual(1)
})

test('it works 3', () => {
  const meetings = [
    [1, 4],
    [2, 3],
    [3, 6],
  ]
  const result = findMinMeetingRooms(meetings)
  expect(result).toEqual(2)
})

test('it works 4', () => {
  const meetings = [
    [4, 5],
    [2, 3],
    [2, 4],
    [3, 5],
  ]
  const result = findMinMeetingRooms(meetings)
  expect(result).toEqual(2)
})
