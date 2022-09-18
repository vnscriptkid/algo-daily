export function findMissingNumber(nums: number[]) {
    //  0  1  2  3  4
    // [4, 0, 3, 1]
    //     ^

    // loop
    // if cur === n => next
    // else if curIdx !== cur => swap
    const n = nums.length;
    let i = 0;
    while (i < nums.length) {
        let correctIdxOfCurNum = nums[i];

        if (nums[i] === n || i === correctIdxOfCurNum) {
            i++;
            continue;
        }

        swap(nums, i, correctIdxOfCurNum)
    }

    // loop 2
    // find the num at incorrect pos 
    // case 1: if found, returns cur idx
    // case 2: if not found, returns n
    for (let [idx, num] of nums.entries()) {
        if (num !== idx) {
            return idx;
        }
    }

    return n;
}

var swap = (arr: number[], a: number, b: number) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}