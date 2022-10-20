import { findClosetPoints } from "./submit-1"

test('works 1', () => {
    expect(findClosetPoints([[1, 2], [1, 3]], 1)).toEqual([[1, 2]])
})

test('works 2', () => {
    expect(findClosetPoints([[1, 3], [3, 4], [2, -1]], 2)).toEqual([[1, 3], [2, -1]])
})