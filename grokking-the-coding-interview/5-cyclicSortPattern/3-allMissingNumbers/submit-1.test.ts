import { findMissingNumbers } from "./submit-1"

test('works', () => {
    expect(findMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1])).toEqual([4, 6, 7])
    expect(findMissingNumbers([2, 4, 1, 2])).toEqual([3])
    expect(findMissingNumbers([2, 3, 2, 1])).toEqual([4])
})