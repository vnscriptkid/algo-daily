export function insertIntervals(intervals: number[][], newInterval: number[]) {
    // const Intervals = [[1, 3], [5, 7], [8, 12]], NewInterval = [4, 6];

    // 1  2  3  4  5  6  7  8  9  10  11  12
    // [     ]A
    //             [     ]B
    //                      [              ]C
    //                          ^
    //          {      }N

    // results: [ A, (B+N), C  ]

    // 1  2  3  4  5  6  7  8  9  10  11  12
    // [     ]A
    //             [     ]B
    //                      [              ]C
    //                          ^
    //          {                  }N

    // merged: B+N+C

    const result: any[] = [];

    let i = 0;

    while (i < intervals.length) {
        if (overlaps(intervals[i], newInterval)) {
            break;
        }
        console.log('non overlap', String(intervals[i]), String(newInterval))
        result.push(intervals[i])
        i++;
    }


    let merged = newInterval
    while (i < intervals.length && overlaps(intervals[i], newInterval)) {
        merged = merge(merged, intervals[i])
        i++;
    }

    if (merged !== newInterval) {
        result.push(merged);
    }

    while (i < intervals.length) {
        result.push(intervals[i])
        i++;
    }

    return result;
}

function overlaps(interval1: number[], interval2: number[]): boolean {
    // interval1  [  ]
    // interval2   {   }

    // interval1   [   ]
    // interval2 {   }

    // interval1     []
    // interval2   {     }
    if (interval2[0] >= interval1[0] && interval2[0] < interval1[1]) {
        return true;
    }

    if (interval2[1] > interval1[0] && interval2[1] <= interval1[1]) {
        return true;
    }

    if (interval2[0] <= interval1[0] && interval2[1] >= interval1[1]) {
        return true;
    }

    return false;
}

function merge(x: number[], y: number[]) {
    return [
        Math.min(x[0], y[0]),
        Math.max(x[1], y[1])
    ]
}
