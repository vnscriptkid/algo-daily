export function sort(nums: number[]): number[] {

    // [3, 1, 5, 4, 2]

    // 1  2  3  4  5

    // loop, for each num x:
    // - if it's correct pos (x at index [x - 1]), skip
    // - if it's not correct pos => try to make it correct by swapping with number at [x - 1]

    for (let i = 0; i < nums.length; i++) {
        let curNum = nums[i];
        let correctIdx = curNum - 1;

        while (i !== correctIdx) {
            swap(nums, i, correctIdx)

            curNum = nums[i]
            correctIdx = curNum - 1
        }
    }

    return nums;
}

function swap(nums: number[], i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}
