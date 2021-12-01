// Minimum Meeting Rooms

const Heap = require('collections/heap')

// Given a list of intervals representing the start and end time of ‘N’ meetings,
// find the minimum number of rooms required to hold all the meetings.

// Meetings: [[4,5], [2,3], [2,4], [3,5]]
// Output: 2
// Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].

// Here is a visual representation of Example 4:

function findMinMeetingRooms(meetings) {
  // sort by startTime
  meetings.sort((a, b) => a[0] - b[0])

  const concurrentMeetings = new Heap([], null, (a, b) => b[1] - a[1])
  let minRooms = 1

  for (let curMeeting of meetings) {
    // remove any meeting that has ended at the time curMeeting starts
    while (
      concurrentMeetings.length &&
      concurrentMeetings.peek()[1] <= curMeeting[0]
    ) {
      concurrentMeetings.pop()
    }

    concurrentMeetings.add(curMeeting)

    // size of concurrentMeetings will be min number of rooms needed
    minRooms = Math.max(concurrentMeetings.length, minRooms)
  }

  return minRooms
}

module.exports = {findMinMeetingRooms}
