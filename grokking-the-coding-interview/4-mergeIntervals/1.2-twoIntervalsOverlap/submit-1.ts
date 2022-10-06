export function hasAnyOverlap(intervals: number[][]): boolean {
    intervals.sort((a, b) => a[0] - b[0]);

    // [1, 4], [2, 5], [7, 9]
    //   ^
    //           $

    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i];

        // does cur overlap prev
        // [   ]
        //   {   }

        if (cur[0] < prev[1]) {
            return true;
        }

        prev = cur;
    }

    return false;
}