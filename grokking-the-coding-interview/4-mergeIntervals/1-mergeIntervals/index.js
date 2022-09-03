// Problem: Given a list of intervals, merge all the overlapping intervals to
// produce a list that has only mutually exclusive intervals.
// 0 1 2 3 4 5 6 7 8 9 10
//   [     ]
//       [     ]
//               [   ]
//                 [    ]

//   [         ] [      ]

function merge(intervals) {
  // [[start1, end1], [start2, end2]]
  const result = []

  intervals.sort((a, b) => a[0] - b[0])

  let prev = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]

    // [  ] {  } ...
    if (cur[0] > prev[1]) {
      result.push(prev)
      prev = cur
    } else {
      // [  { }]
      // [  { ] }
      prev[1] = Math.max(prev[1], cur[1])
    }
  }

  result.push(prev)

  return result
}

module.exports = {merge}
