import { solution } from "./solution"

test('it works', () => {
    expect(solution([1, 2, 3, 4, 6], 6)).toEqual([1, 3]);
    expect(solution([2, 5, 9, 11], 11)).toEqual([0, 2]);
})