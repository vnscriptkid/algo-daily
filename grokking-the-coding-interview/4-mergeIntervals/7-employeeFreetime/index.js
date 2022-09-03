// Employee Free Time

// For ‘K’ employees, we are given a list of intervals representing the working hours of each employee.
// Our goal is to find out if there is a free interval that is common to all employees.
// You can assume that each list of employee working hours is sorted on the start time.

// Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
//                               [ [1,3],  [2,4], [6,8], [9,12] ]
// Output: [4,6], [8,9]
// Explanation: All employess are free between [4,6] and [8,9].

// 1 2 3 4 5 6 7 8 9 10 11 12
// [   ]
//                 [        ]
//   {   }   {   }

function findCommonFreetime(workingHours) {
  // flat the input out
  const flat = []
  for (let subArray of workingHours) {
    for (let interval of subArray) {
      flat.push(interval)
    }
  }

  // sort the flat arr by startTime
  flat.sort((a, b) => a[0] - b[0])

  // interate every interval, compare curStartTime with prevEndTime
  let prevEndtime = flat[0][1]
  const freetimes = []

  for (let i = 1; i < flat.length; i++) {
    let [curStarttime, curEndtime] = flat[i]

    // case 1
    // [   ]
    //   {   }
    //      (   )

    // case 2
    // [     ]
    //   { }
    //         (   )

    // case 3
    //  [   ]
    //          {   }
    //                   (  )

    if (curStarttime > prevEndtime) {
      freetimes.push([prevEndtime, curStarttime])
    }

    prevEndtime = Math.max(prevEndtime, curEndtime)
  }

  return freetimes
}

module.exports = {findCommonFreetime}
