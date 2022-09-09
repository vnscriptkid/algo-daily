import { findMissingNumber } from "./submit-1"

test('works', () => {
    expect(findMissingNumber([1, 5, 2, 6, 4])).toEqual(3);
    // (1 ^ 1)  ^ (5 ^ 5) ^ (2 ^ 2) ^ (6 ^ 6) ^ (4 ^ 4) ^ 3
})