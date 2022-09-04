export function merge(intervals: number[][]): number[][] {
    // [[1, 4], [2, 5], [7, 9]]

    // 1  2  3  4  5  6  7  8  9
    // [        ]
    //      ^
    //    [        ]
    //                   [     ]  


    // 1. sort by start time
    // 2. consider one by one: cur overlaps with prev
    //    2.1 yes. merge to prev
    //    2.2 no. push prev to result
    // 3. end of loop: push prev to result

    intervals.sort((a, b) => a[0] - b[0]);

    const result: number[][] = [];

    let prev = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i];

        if (overlaps(prev, cur)) {
            prev = mergeTwo(prev, cur);
        } else {
            result.push(prev);
            prev = cur;
        }
    }

    result.push(prev);

    return result;
}

function overlaps(prev: number[], cur: number[]): boolean {
    // assuming cur[0] >= prev[0]
    // (x)
    //    [  ]
    //  {   }

    //    [     ]
    //      { }

    //   [    ]
    //      {   }
    if (cur[0] >= prev[0] && cur[0] <= prev[1]) {
        return true;
    }

    // (x)
    //   [   ]
    // {       }

    return false;
}
function mergeTwo(prev: number[], cur: number[]): number[] {
    //    [     ]
    //      { }

    //   [    ]
    //      {   }
    return [
        Math.min(prev[0], cur[0]),
        Math.max(prev[1], cur[1])
    ]
}

merge([[1, 4], [2, 5], [7, 9]])