export function findKInRow(str: string, k: number) {
    // y o u t t t u b e , k = 3
    // ^

    for (let i = 0; i <= str.length - k; i++) {
        let j = 1;

        for (j = 1; j < k; j++) {
            let curIdx = i + j;
            let prevIdx = curIdx - 1;

            if (str[curIdx] !== str[prevIdx]) {
                break;
            }
        }

        if (j === k) {
            return i;
        }
    }
}   