import { findKthSmallestNumber } from "./submit-1"

test('works 1', () => {
    expect(findKthSmallestNumber([1, 5, 12, 2, 11, 5], 3)).toEqual(5)
})

test('works 2', () => {
    expect(findKthSmallestNumber([1, 5, 12, 2, 11, 5], 4)).toEqual(5)
})

test('works 3', () => {
    expect(findKthSmallestNumber([5, 12, 11, -1, 12], 3)).toEqual(11)
})