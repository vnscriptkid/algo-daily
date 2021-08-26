// 0 1 2 3 4 5 6 7 8 9 10
//   [     ]
//       [     ]
//               [   ]
//                 [    ]

function merge(intervals) {
  // sort by start time
  intervals.sort((a, b) => a[0] - b[0])
  const result = []

  let prev = [...intervals[0]] // avoid modifying original interval

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]

    // ]  {
    if (cur[0] > prev[1]) {
      result.push(prev)
      prev = [...cur]
    }
    // _{_]_ => merge
    //// _{_]__}_
    //// _{_}_]_
    else prev[1] = Math.max(cur[1], prev[1])
  }

  result.push(prev)

  return result
}

module.exports = {merge}
