import { findSubsets } from "./submit-1"

test('works 1', () => {
    const result = findSubsets([1, 3]);
    expect(result).toEqual([[], [3], [1], [1, 3]])
})

test('works 2', () => {
    const result = findSubsets([1, 5, 3]);
    expect(result).toEqual([
        [], [3],
        [5], [5, 3],
        [1], [1, 3],
        [1, 5], [1, 5, 3]
    ])
})