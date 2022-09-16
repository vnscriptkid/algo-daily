export function findMaxSumSubArr(arr: number[], k: number) {
    // [2, 1, 5, 1, 3, 2]
    //           ^     $

    // windowSum: 6
    // max: 9

    let max = -1;

    let left = 0;
    let curSum = 0;
    for (let right = 0; right < arr.length; right++) {
        curSum += arr[right];

        const windowSize = right - left + 1;
        if (windowSize === k) {
            max = Math.max(max, curSum);

            // shrink down
            curSum -= arr[left];
            left++;
        }
    }

    return max;
}