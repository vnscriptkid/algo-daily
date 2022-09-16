import { removeDuplicates } from "./submit-1";

test('works 1', () => {
    const arr = [2, 3, 3, 3, 6, 9, 9];
    expect(removeDuplicates(arr)).toEqual(4);
    expect(arr.slice(0, 4)).toEqual([2, 3, 6, 9])
})

test('works 1', () => {
    const arr = [2, 2, 2, 11];
    expect(removeDuplicates(arr)).toEqual(2);
    expect(arr.slice(0, 2)).toEqual([2, 11])
})