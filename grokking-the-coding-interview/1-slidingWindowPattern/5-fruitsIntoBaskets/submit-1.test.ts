import { findLength } from "./submit-1"

test('works', () => {
    expect(findLength(['A', 'B', 'C', 'A', 'C'])).toEqual(3);
})

test('works 2', () => {
    expect(findLength(['A', 'B', 'C', 'B', 'B', 'C'])).toEqual(5)
})