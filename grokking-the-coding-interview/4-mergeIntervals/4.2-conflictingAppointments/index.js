// Conflicting Appointments 2
// Given a list of appointments, find all the conflicting appointments.

// Appointments: [[4,5], [2,3], [3,6], [5,7], [7,8]]
// Output:
// [4,5] and [3,6] conflict.
// [3,6] and [5,7] conflict.

// [[4,5], [2,3], [3,6], [5,7], [7,8]]

// [[2,3], [3,6] [4,5], [5,7], [7,8]]
//
// x [  ] {  }
// x [  ]{     }
// y [  { ]  }

// [                  ]
//           {  }
//                  [    ]
function findConflictingAppointments(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  const conflicts = []

  let prev = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]

    // check conflict btw cur and prev
    if (cur[0] < prev[1]) {
      const conflict = [prev, cur]
      conflict.sort((a, b) => a[1] - b[1])
      conflicts.push(conflict)
    }

    if (cur[1] > prev[1]) prev = cur
  }

  return conflicts
}

module.exports = {findConflictingAppointments}
