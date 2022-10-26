export function canPartition(nums: number[]) {
    const sum = nums.reduce((a, i) => a + i, 0);

    if (sum % 2 !== 0) return false;

    const halfSum = sum / 2;

    return canPartitionRecursive(nums, halfSum, 0)
}

function canPartitionRecursive(nums: number[], targetSum: number, curIdx: number) {
    if (targetSum === 0) {
        return true;
    }

    if (curIdx === nums.length) {
        return false;
    }

    return canPartitionRecursive(nums, targetSum - nums[curIdx], curIdx + 1)
        || canPartitionRecursive(nums, targetSum, curIdx + 1);
}
