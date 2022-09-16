export function removeDuplicates(arr: number[]) {
    // [2, 3, 6, 9, 3, 3, 9]
    //              $
    //                       ^

    // nextNonDuplicate: 3
    // cur

    let nextNonDuplicateIdx = 1;

    let curIdx = 1;

    while (curIdx < arr.length) {
        if (arr[curIdx] !== arr[nextNonDuplicateIdx - 1]) {
            swap(arr, curIdx, nextNonDuplicateIdx)
            nextNonDuplicateIdx++;
        }

        curIdx++;
    }

    return nextNonDuplicateIdx;
}

function swap(arr: number[], x: number, y: number) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
}
