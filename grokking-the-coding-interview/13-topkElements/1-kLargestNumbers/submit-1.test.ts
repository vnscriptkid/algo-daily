import { findKLargestNumbers } from "./submit-1"

test('works 1', () => {
    expect(findKLargestNumbers([3, 1, 5, 12, 2, 11], 3)).toEqual([12, 11, 5])
})

test('works 2', () => {
    expect(findKLargestNumbers([5, 12, 11, -1, 12], 3)).toEqual([12, 12, 11])
})