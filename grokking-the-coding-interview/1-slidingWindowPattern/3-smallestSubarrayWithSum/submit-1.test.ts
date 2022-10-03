import { findMinSubarray } from "./submit-1"

test('works 1', () => {
    expect(findMinSubarray([2, 1, 5, 2, 3, 2], 7)).toEqual(2)
})

test('works 2', () => {
    expect(findMinSubarray([2, 1, 5, 2, 8], 7)).toEqual(1)
})

test('works 3', () => {
    expect(findMinSubarray([3, 4, 1, 1, 6], 8)).toEqual(3)
})