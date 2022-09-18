import { findMissingNumber } from "./submit-1"

test('works 1', () => {
    expect(findMissingNumber([4, 0, 3, 1])).toEqual(2);
})

test('works 2', () => {
    expect(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1])).toEqual(7);
})