export function findMinSubarray(arr: number[], sum: number) {
    let globalMin = Infinity;

    // [2, 1, 5, 2, 3, 2], 7
    //           ^     $ 

    // loop
    // expand cur window to the right
    // check if cur window is valid (loop)
    // yes => consider shrink down from the left, consider update globalMin
    // no => stop inner loop
    let left = 0;
    let windowSum = 0;
    for (let right = 0; right < arr.length; right++) {
        windowSum += arr[right];

        while (windowSum >= sum) {
            const windowSize = right - left + 1;

            globalMin = Math.min(globalMin, windowSize);

            windowSum -= arr[left];
            left++;
        }
    }

    return globalMin === Infinity ? 0 : globalMin;
    // windowSum: 7
    // globalMin: 2
}