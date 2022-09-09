import { search } from "./submit-1"

test('works 1', () => {
    expect(search([4, 6, 10], 10)).toEqual(2);
    expect(search([1, 2, 3, 4, 5, 6, 7], 5)).toEqual(4);
    expect(search([10, 6, 4], 10)).toEqual(0);
    expect(search([10, 6, 4], 4)).toEqual(2);
})