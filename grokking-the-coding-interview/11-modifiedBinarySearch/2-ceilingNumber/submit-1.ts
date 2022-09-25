export function ceilingOfNumber(nums: number[], key: number) {
    // [1, 3, 8, 10, 15]   k = 12
    //            r   l 
    //                m

    // [4, 6, 10], 17
    //  l  m   r
    //        lmr
    //         r   l

    //    [4, 6, 10], -1
    //     l  m   r
    //    lmr
    // r   l

    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2);

        if (key === nums[middle]) return middle;

        if (key > nums[middle]) {
            // key on the right
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    //   [right]   key    [left] 

    return left < nums.length ? left : -1;
}