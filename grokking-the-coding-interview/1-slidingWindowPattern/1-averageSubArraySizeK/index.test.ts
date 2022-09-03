import {solution} from './solution'

test('works', () => {
  const result = solution([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)

  expect(result).toEqual([2.2, 2.8, 2.4, 3.6, 2.8])
})
