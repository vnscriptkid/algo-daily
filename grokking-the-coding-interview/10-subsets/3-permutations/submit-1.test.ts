import { findPermutations } from "./submit-1"

test('works', () => {
    expect(findPermutations([1, 3, 5])).toEqual([
        [1, 3, 5], [1, 5, 3], [3, 1, 5], [3, 5, 1], [5, 1, 3], [5, 3, 1]
    ])
})