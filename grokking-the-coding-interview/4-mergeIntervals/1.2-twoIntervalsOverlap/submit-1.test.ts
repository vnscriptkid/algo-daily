import { hasAnyOverlap } from "./submit-1"

test('works 1', () => {
    expect(hasAnyOverlap([[1, 4], [2, 5], [7, 9]])).toEqual(true);
    expect(hasAnyOverlap([[1, 4], [7, 9], [2, 5]])).toEqual(true);
    expect(hasAnyOverlap([[1, 4], [5, 6], [7, 9]])).toEqual(false);
})