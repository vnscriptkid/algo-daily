// Given a set of intervals, find out if any two intervals overlap.
//    [[1,4], [4,5], [7,9]]
//       A      B      C
//                     ^
// prev: B

//    1 2 3 4 5 6 7 8 9 10
//  A [     ]
//  B   [     ]
//  C         [   ]

function anyOverlap(intervals) {
  // sort by starttime
  intervals.sort((a, b) => a[0] - b[0])

  // check every interval with its prev
  let prev = intervals[0]
  let i = 1
  while (i < intervals.length) {
    let cur = intervals[i]

    // [ { ]  }
    if (cur[0] < prev[1]) return true

    // make loop rolling
    prev = cur
    i++
  }

  return false
}

module.exports = {anyOverlap}
