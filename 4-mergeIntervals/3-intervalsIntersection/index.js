// Intervals Intersection
// Given two lists of intervals, find the intersection of these two lists.
// Each list consists of disjoint intervals sorted on their start time.

// Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// Output: [2, 3], [5, 6], [7, 7]

// 1 2 3 4 5 6 7 8 9
// [   ]   [ ] [   ]
//   ^
//   [ ]   [   ]
//    ^

// Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
// Output: [5, 7], [9, 10]

// 1 2 3 4 5 6 7 8 9 10 11 12
// [   ]   [   ]   [        ]
//         [   ]   [  ]
// [ [9,10] ]

function isOverlapping(interval1, interval2) {
  const isNot = interval1[0] > interval2[1] || interval2[0] > interval1[1]

  if (isNot) return null

  // [  ]
  //   [  ]

  //    [  ]
  //  [   ]

  // [   ]
  //  [ ]
  return [
    Math.max(interval1[0], interval2[0]),
    Math.min(interval1[1], interval2[1]),
  ]
}

Array.prototype.endsBefore = function (other) {
  return this[1] < other[1]
}

function findIntersections(list1, list2) {
  let cur1 = 0,
    cur2 = 0

  const output = []

  while (cur1 < list1.length && cur2 < list2.length) {
    let interval1 = list1[cur1]
    let interval2 = list2[cur2]

    const intersection = isOverlapping(interval1, interval2)

    if (intersection) {
      output.push(intersection)
    }

    if (interval1.endsBefore(interval2)) cur1++
    else cur2++
  }

  return output
}

module.exports = {findIntersections}
