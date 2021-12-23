// Minimum Meeting Rooms

// Given a list of intervals representing the start and end time of ‘N’ meetings,
// find the minimum number of rooms required to hold all the meetings.

// Meetings: [[4,5], [2,3], [2,4], [3,5]] => [ [2,3], [2,4], [3,5], [4,5] ]
// Output: 2
// Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].

// 1  2  3  4  5  6
//    [  ]
//    [     ]
//       [     ]
//          [  ]

// (A, B, C) => D (minHeapBasedOnEndTime)

const Heap = require('collections/heap')

function findMinMeetingRooms(meetings) {
  meetings.sort((a, b) => a[0] - b[0])

  const concurrentMeetings = new Heap([], null, (a, b) => b[1] - a[1])

  let numOfRooms = 0

  for (let meeting of meetings) {
    let [startTime] = meeting

    // how many meetings are happening at the time curMeeting starts

    while (
      concurrentMeetings.length &&
      startTime >= concurrentMeetings.peek()[1]
    ) {
      concurrentMeetings.pop()
    }

    concurrentMeetings.add(meeting)

    numOfRooms = Math.max(numOfRooms, concurrentMeetings.length)
  }

  return numOfRooms
}

module.exports = {findMinMeetingRooms}
