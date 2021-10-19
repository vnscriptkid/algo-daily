// Conflicting Appointments
// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

// Appointments: [[1,4], [2,5], [7,9]]
// Output: false
// Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.

function hasNoConflict(intervals) {
  // sort intervals by startTime
  intervals.sort((a, b) => a[0] - b[0])

  // iterate through intervals, compare cur with prev
  let prev = intervals[0]
  let cur = null
  for (let i = 1; i < intervals.length; i++) {
    cur = intervals[i]
    if (cur[0] <= prev[1]) return false
  }

  // return true after exiting the loop
  return true
}

module.exports = {hasNoConflict}
