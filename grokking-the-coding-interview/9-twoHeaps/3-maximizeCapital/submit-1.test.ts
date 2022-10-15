import { maximizeCapital } from "./submit-1"

test('works 1', () => {
    expect(maximizeCapital(2, 0, [1, 2, 3], [0, 1, 1])).toEqual(4)
})

test('works 2', () => {
    expect(maximizeCapital(3, 0, [1, 2, 3], [0, 1, 2])).toEqual(6)
})