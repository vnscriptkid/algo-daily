export function solution(sortedArr: number[], target: number): number[] {
    let left = 0, right = sortedArr.length - 1;

    while (left < right) {
        let sum = sortedArr[left] + sortedArr[right];

        if (sum === target) {
            return [left, right]
        }

        if (sum < target) {
            // need a larger sum
            left++;
        } else {
            right--;
        }
    }

    return [-1, -1]
}