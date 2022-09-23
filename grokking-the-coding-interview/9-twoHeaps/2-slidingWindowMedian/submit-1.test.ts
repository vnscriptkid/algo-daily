import { slidingWindowMedian } from "./submit-1"

test('works 1', () => {
    const result = slidingWindowMedian([1, 2, -1, 3, 5], 2)
    expect(result).toEqual([1.5, 0.5, 1.0, 4.0])
})

test('works 2', () => {
    const result = slidingWindowMedian([1, 2, -1, 3, 5], 3)
    expect(result).toEqual([1.0, 2.0, 3.0])
})