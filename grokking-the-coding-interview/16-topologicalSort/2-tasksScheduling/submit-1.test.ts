import { isSchedulingPossible } from "./submit-1"

test('works 1', () => {
    expect(isSchedulingPossible(3, [[0, 1], [1, 2]])).toEqual(true);
})

test('works 2', () => {
    expect(isSchedulingPossible(3, [[0, 1], [1, 2], [2, 0]])).toEqual(false);
})

test('works 3', () => {
    expect(isSchedulingPossible(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]])).toEqual(true);
})