export function makeSquares(arr: number[]): number[] {
    // [-2, -1, 0, 2, 3]
    //  ^       $

    // left: 4
    // right: 0

    // result: [4 4 9]

    const result: number[] = [];

    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const leftSquare = arr[left] * arr[left];
        const rightSquare = arr[right] * arr[right];

        if (rightSquare >= leftSquare) {
            result.unshift(rightSquare)
            right--;
        } else {
            result.unshift(leftSquare)
            left++;
        }
    }

    return result;
}