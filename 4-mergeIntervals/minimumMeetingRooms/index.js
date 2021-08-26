const Heap = require('collections/heap')

function findMinMeetingRooms(meetings) {
  // output
  let minMeetingRooms = 0
  // currentlyActiveMeetings is a min heap, that allows us to take out the meeting that ends earliest
  const currentlyActiveMeetings = new Heap([], null, (a, b) => b[1] - a[1])

  // sort meetings by starting time
  meetings.sort((a, b) => a[0] - b[0])

  // loop through all meetings starting from earliest one
  for (let meeting of meetings) {
    // compare current meeting's start time with end time of meetings in the heap
    // take out all meetings that already ended
    while (
      currentlyActiveMeetings.length &&
      meeting[0] >= currentlyActiveMeetings.peek()[1]
    ) {
      currentlyActiveMeetings.pop()
    }
    // push current meeting to the heap
    currentlyActiveMeetings.push(meeting)

    // update min meeting rooms
    minMeetingRooms = Math.max(minMeetingRooms, currentlyActiveMeetings.length)
  }

  return minMeetingRooms
}

module.exports = {findMinMeetingRooms}
