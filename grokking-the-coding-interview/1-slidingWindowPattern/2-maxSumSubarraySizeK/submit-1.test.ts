import { findMaxSumSubArr } from "./submit-1"

test('works 1', () => {
    expect(findMaxSumSubArr([2, 1, 5, 1, 3, 2], 3)).toEqual(9);
})

test('works 2', () => {
    expect(findMaxSumSubArr([2, 3, 4, 1, 5], 2)).toEqual(7);
})