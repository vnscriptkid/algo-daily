

export function search(nums: number[], key: number): number {
    const ascending = nums[0] < nums[nums.length - 1];

    return binarySearch(nums, key, ascending);
}

function binarySearch(nums: number[], key: number, ascending: boolean): number {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2);

        if (nums[middle] === key) {
            return middle;
        }

        if (key > nums[middle]) {
            ascending ? (left = middle + 1) : (right = middle - 1);
        } else {
            ascending ? (right = middle - 1) : (left = middle + 1);
        }
    }

    return -1;
}
