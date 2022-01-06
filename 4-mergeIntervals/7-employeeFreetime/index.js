// Employee Free Time

// For ‘K’ employees, we are given a list of intervals representing the working hours of each employee.
// Our goal is to find out if there is a free interval that is common to all employees.
// You can assume that each list of employee working hours is sorted on the start time.

// Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
// Output: [4,6], [8,9]
// Explanation: All employess are free between [4,6] and [8,9].

// 1 2 3 4 5 6 7 8 9 10 11 12
// [   ]
//                 [        ]
//   {   }   {   }

function findCommonFreetime(workingHours) {
  let flat = []
  for (let intervalsOfUser of workingHours) {
    flat = [...flat, ...intervalsOfUser]
  }
  flat.sort((a, b) => a[0] - b[0])

  const freetimes = []

  let endOfPrev = flat[0][1]
  for (let i = 1; i < flat.length; i++) {
    let [start, end] = flat[i]
    if (start <= endOfPrev) {
      // overlaps
      endOfPrev = Math.max(end, endOfPrev)
    } else {
      // there's freetime
      freetimes.push([endOfPrev, start])
      endOfPrev = end
    }
  }

  return freetimes
}

module.exports = {findCommonFreetime}
