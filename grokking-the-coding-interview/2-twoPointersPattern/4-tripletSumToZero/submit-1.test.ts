import { tripletsSumToZero } from "./submit-1"

test('works', () => {
    const result = tripletsSumToZero([-3, 0, 1, 2, -1, 1, -2]);
    console.log(result);
    expect(result).toEqual([[-1, 0, 1], [-2, 0, 2], [-2, 1, 1], [-3, 1, 2]])
})

test('works 2', () => {
    const result = tripletsSumToZero([-5, 2, -1, -2, 3]);
    console.log(result);
    expect(result).toEqual([[-1, -2, 3], [-5, 2, 3]])
})