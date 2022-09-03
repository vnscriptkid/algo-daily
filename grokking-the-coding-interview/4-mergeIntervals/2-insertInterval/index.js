// Insert Interval
// Given a list of non-overlapping intervals sorted by their start time,
// insert a given interval at the correct position and merge all necessary intervals
// to produce a list that has only mutually exclusive intervals.

//       [[1,3], [5,7], [8,12]], New Interval=[4,6]
//          A      B       C
//       1 2 3 4 5 6 7 8 9 10 11 12
//  A    {   }
//  B            {   }
//  C                  {          } {   }         {    }
//                 ^
//  New:            [                        ]
// Output: [[1,3], [4,7], [8,12]]

function insert(intervals, newInterval) {
  const sortedList = []
  // find the first interval that overlaps with new interval
  let i = 0
  // {  } {  }  [  ]
  while (intervals[i][1] < newInterval[0]) {
    sortedList.push(intervals[i])
    i++
  }

  // interate from that interval to merge possible intervals to newInterval
  // [  ] {  } intervals[i][0] > newInterval[1]
  while (i < intervals.length && !(intervals[i][0] > newInterval[1])) {
    // { } { } [ ]
    // * { [  ] }
    // * [  {  }  ]
    // * { [ }  ]
    // *   [ { ]  }
    // [ ] { }
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    i++
  }

  sortedList.push(newInterval)

  while (i < intervals.length) {
    sortedList.push(intervals[i])
    i++
  }

  return sortedList
}

module.exports = {insert}
