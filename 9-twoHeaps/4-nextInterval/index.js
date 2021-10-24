/*
Problem Challenge 1
Next Interval (hard) 
Given an array of intervals, find the next interval of each interval. In a list of intervals, 
for an interval ‘i’ its next interval ‘j’ will have the smallest ‘start’ greater than or equal to the ‘end’ of ‘i’.
Write a function to return an array containing indices of the next interval of each input interval. 
If there is no next interval of a given interval, return -1. 
It is given that none of the intervals have the same start point.
Example 1:
Input: Intervals [[2,3], [3,4], [5,6]]
Output: [1, 2, -1]
Explanation: The next interval of [2,3] is [3,4] having index ‘1’. 
Similarly, the next interval of [3,4] is [5,6] having index ‘2’.
There is no next interval for [5,6] hence we have ‘-1’.
Example 2:
Input: Intervals [[3,4], [1,5], [4,6]]
Output: [2, -1, -1]
Explanation: The next interval of [3,4] is [4,6] which has index ‘2’. 
There is no next interval for [1,5] and [4,6].
*/

const Heap = require('collections/heap')

class Interval {
  constructor(startTime, endTime, index) {
    this.startTime = startTime
    this.endTime = endTime
    this.index = index
  }
}

function findNextIntervals(intervals) {
  const minHeapOnStartTime = new Heap(
    [],
    null,
    (a, b) => b.startTime - a.startTime,
  )
  const minHeapOnEndTime = new Heap([], null, (a, b) => b.endTime - a.endTime)

  for (let i = 0; i < intervals.length; i++) {
    const [startTime, endTime] = intervals[i]
    minHeapOnStartTime.add(new Interval(startTime, endTime, i))
    minHeapOnEndTime.add(new Interval(startTime, endTime, i))
  }

  const output = []

  while (minHeapOnEndTime.length) {
    const curInterval = minHeapOnEndTime.pop()
    // find the next interval for curInterval

    if (minHeapOnStartTime.length === 0) {
      output.push(-1)
      continue
    }

    while (minHeapOnStartTime.peek().startTime < curInterval.endTime) {
      minHeapOnStartTime.pop()
    }

    if (minHeapOnStartTime.length > 0) {
      output.push(minHeapOnStartTime.pop().index)
    } else {
      output.push(-1)
    }
  }

  return output
}

module.exports = {findNextIntervals}
