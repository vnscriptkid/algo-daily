import { findSingleNumbers } from "./submit-1"

test('works 1', () => {
    expect(findSingleNumbers([1, 4, 2, 1, 3, 5, 6, 2, 3, 5])).toEqual([4, 6])
})

test('works 2', () => {
    expect(findSingleNumbers([2, 1, 3, 2])).toEqual([1, 3])
})