import { findMedian } from "./submit-1";

test('works 1', () => {
    const L1 = [2, 6, 8], L2 = [3, 6, 7], L3 = [1, 3, 4];
    expect(findMedian([L1, L2, L3])).toEqual(4)
})

test('works 2', () => {
    const L1 = [5, 8, 9], L2 = [1, 7, 10];
    expect(findMedian([L1, L2])).toEqual(7.5)
})