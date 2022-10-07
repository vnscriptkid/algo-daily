export function findMissingNumbers(nums: number[]): number[] {
    // [2, 3, 1, 8, 2, 3, 5, 1]

    // [1  2  3  4  5  6  7  8]
    // [1, 2, 3, 1, 5, 3, 2, 8]
    //                          ^

    const missingNums: number[] = [];

    let i = 0;
    while (i < nums.length) {
        const curNum = nums[i];
        const correctIdx = curNum - 1;

        if (i !== correctIdx && nums[correctIdx] !== correctIdx + 1) {
            [nums[correctIdx], nums[i]] = [nums[i], nums[correctIdx]]
        } else {
            i++;
        }
    }

    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            missingNums.push(i + 1);
        }
    }

    return missingNums;
}