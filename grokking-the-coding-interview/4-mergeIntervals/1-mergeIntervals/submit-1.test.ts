import { merge } from "./submit-1"

test('works 1', () => {
    expect(merge([[1, 4], [2, 5], [7, 9]])).toEqual([[1, 5], [7, 9]])
})

test('works 2', () => {
    expect(merge([[6, 7], [2, 4], [5, 9]])).toEqual([[2, 4], [5, 9]])
})

test('works 3', () => {
    expect(merge([[1, 4], [2, 6], [3, 5]])).toEqual([[1, 6]])
})