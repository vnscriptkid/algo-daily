export function findMissingNumber(nums: number[]): number {
    // (1 ^ 1)  ^ (5 ^ 5) ^ (2 ^ 2) ^ (6 ^ 6) ^ (4 ^ 4) ^ 3

    let xorAll = 0;

    const largestNum = nums.length + 1;

    for (let num of nums) {
        xorAll ^= num;
    }

    for (let i = 1; i <= largestNum; i++) {
        xorAll ^= i;
    }

    return xorAll;
}