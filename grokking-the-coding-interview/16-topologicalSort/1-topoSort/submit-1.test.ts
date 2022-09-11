import { topoSort } from "./submit-1"

test('works 1', () => {
    expect(topoSort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])).toEqual([3, 2, 0, 1])
})

test('works 2', () => {
    expect(topoSort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])).toEqual([4, 2, 3, 0, 1])
})

test('works 3', () => {
    expect(topoSort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])).toEqual([5, 6, 3, 4, 0, 2, 1])
})