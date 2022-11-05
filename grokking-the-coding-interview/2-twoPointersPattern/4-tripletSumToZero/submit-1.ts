export function tripletsSumToZero(arr: number[]) {
    arr.sort();

    const result: number[][] = [];

    for (let i = 0; i < arr.length; i++) {
        let left = i + 1, right = arr.length - 1;

        const firstNum = arr[i];

        while (left < right) {
            let twoSum = arr[left] + arr[right];

            if (twoSum === -firstNum) {
                result.push([firstNum, arr[left], arr[right]]);
                left++;
                right--;
            } else if (twoSum < -firstNum) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}