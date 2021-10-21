// Conflicting Appointments
// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

// Appointments: [[1,4], [2,5], [7,9]]
// Output: false
// Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.

function canAttendAllAppointments(intervals) {
  // sort by start time
  intervals.sort((a, b) => a[0] - b[0])

  // iterate through sorted intervals list, compare cur interval with prev interval
  for (let i = 1; i < intervals.length; i++) {
    // if overlap is found, return false
    let cur = intervals[i]
    let prev = intervals[i - 1]

    // [ { ]   }
    if (cur[0] <= prev[1]) return false
  }

  // exit loop return true
  return true
}

module.exports = {canAttendAllAppointments}
