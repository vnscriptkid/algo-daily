import { makeSquares } from "./submit-1"

test('works 1', () => {
    expect(makeSquares([-2, -1, 0, 2, 3])).toEqual([0, 1, 4, 4, 9])
})

test('works 2', () => {
    expect(makeSquares([-3, -1, 0, 1, 2])).toEqual([0, 1, 1, 4, 9])
})