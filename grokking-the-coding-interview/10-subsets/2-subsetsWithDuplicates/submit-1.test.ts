import { subsetsWithDuplicates } from "./submit-1"

test('works 1', () => {
    const result = subsetsWithDuplicates([1, 3, 3]);
    expect(result).toEqual([[1, 3, 3], [1, 3], [1], [3, 3], [3], []])
})

test('works 2', () => {
    const result = subsetsWithDuplicates([1, 5, 3, 3]);
    expect(result).toEqual([
        [1, 5, 3, 3], [1, 5, 3],
        [1, 5], [1, 3, 3],
        [1, 3], [1],
        [5, 3, 3], [5, 3],
        [5], [3, 3],
        [3], []
    ])
})