import { findKthSmallest } from "./submit-1";

test('works 1', () => {
    const L1 = [2, 6, 8], L2 = [3, 6, 7], L3 = [1, 3, 4];
    expect(findKthSmallest([L1, L2, L3], 5)).toEqual(4)
})

test('works 2', () => {
    const L1 = [5, 8, 9], L2 = [1, 7];
    expect(findKthSmallest([L1, L2], 3)).toEqual(7)
})