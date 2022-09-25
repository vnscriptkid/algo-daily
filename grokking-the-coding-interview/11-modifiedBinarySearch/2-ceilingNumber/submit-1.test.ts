import { ceilingOfNumber } from "./submit-1"

test('works 1', () => {
    expect(ceilingOfNumber([4, 6, 10], 6)).toEqual(1);
})

test('works 2', () => {
    expect(ceilingOfNumber([1, 3, 8, 10, 15], 12)).toEqual(4);
})

test('works 3', () => {
    expect(ceilingOfNumber([4, 6, 10], 17)).toEqual(-1);
})

test('works 4', () => {
    expect(ceilingOfNumber([4, 6, 10], -1)).toEqual(0);
})