import { insertIntervals } from "./submit-1";

test('works 1', () => {
    const Intervals = [[1, 3], [5, 7], [8, 12]], NewInterval = [4, 6];
    const result = insertIntervals(Intervals, NewInterval);
    expect(result).toEqual([[1, 3], [4, 7], [8, 12]])
})

test('works 2', () => {
    const Intervals = [[1, 3], [5, 7], [8, 12]], NewInterval = [4, 10]
    const result = insertIntervals(Intervals, NewInterval);
    console.log(result);
    expect(result).toEqual([[1, 3], [4, 12]])
})

test('works 3', () => {
    const Intervals = [[2, 3], [5, 7]], NewInterval = [1, 4]
    expect(insertIntervals(Intervals, NewInterval)).toEqual([[1, 4], [5, 7]])
})