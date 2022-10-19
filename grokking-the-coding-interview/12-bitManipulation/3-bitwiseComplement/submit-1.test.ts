import { calculateComplement } from "./submit-1"

test('works 1', () => {
    expect(calculateComplement(8)).toEqual(7);
})

test('works 2', () => {
    expect(calculateComplement(10)).toEqual(5);
})