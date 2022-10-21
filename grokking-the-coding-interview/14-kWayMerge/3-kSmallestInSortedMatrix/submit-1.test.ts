import { findKSmallest } from "./submit-1";

test('works', () => {
    const Matrix = [
        [2, 6, 8],
        [3, 7, 10],
        [5, 8, 11]
    ],
        K = 5;

    expect(findKSmallest(Matrix, K)).toEqual(7);


})