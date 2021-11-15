// Conflicting Appointments 2
// Given a list of appointments, find all the conflicting appointments.

// Appointments: [[4,5], [2,3], [3,6], [5,7], [7,8]]
// Output:
// [4,5] and [3,6] conflict.
// [3,6] and [5,7] conflict.

// [[4,5], [2,3], [3,6], [5,7], [7,8]]

// [[2,3], [3,6], [4,5], [5,7], [7,8]]

// [   ]
//       [        ]
//         [   ]
//               [    ]

function findConflictingAppointments(intervals) {
  // sort by start time
  intervals.sort((a, b) => a[0] - b[0])

  let prevInterval = intervals[0]

  const conflicts = []

  for (let i = 1; i < intervals.length; i++) {
    let curInterval = intervals[i]

    if (curInterval[0] < prevInterval[1]) {
      // has conflict
      const conflict = [prevInterval, curInterval]
      conflict.sort((a, b) => a[1] - b[1])
      conflicts.push(conflict)
    }

    if (curInterval[1] > prevInterval[1]) prevInterval = curInterval
  }

  return conflicts
}

module.exports = {findConflictingAppointments}
