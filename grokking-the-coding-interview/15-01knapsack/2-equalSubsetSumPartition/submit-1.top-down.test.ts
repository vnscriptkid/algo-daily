import { canPartition } from "./submit-1.top-down"

test('works 1', () => {
    expect(canPartition([1, 2, 3, 4])).toEqual(true);
    expect(canPartition([1, 1, 3, 4, 7])).toEqual(true);
    expect(canPartition([2, 3, 4, 6])).toEqual(false);
})