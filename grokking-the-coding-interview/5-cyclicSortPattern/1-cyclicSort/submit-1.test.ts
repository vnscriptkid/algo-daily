import { sort } from "./submit-1"

test('works', () => {
    expect(sort([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5])
    expect(sort([2, 6, 4, 3, 1, 5])).toEqual([1, 2, 3, 4, 5, 6])
    expect(sort([1, 5, 6, 4, 3, 2])).toEqual([1, 2, 3, 4, 5, 6])
})