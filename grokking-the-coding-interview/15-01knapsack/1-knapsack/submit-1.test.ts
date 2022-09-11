import { knapsack } from "./submit-1"

test('works 1', () => {
    expect(knapsack([1, 2, 3, 5], [1, 6, 10, 16], 7)).toEqual(22)
})

test('works 1', () => {
    expect(knapsack([1, 2, 3, 5], [1, 6, 10, 16], 6)).toEqual(17)
})