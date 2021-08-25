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
Explanation: The next interval of [2,3] is [3,4] having index ‘1’. Similarly, the next interval of [3,4] is [5,6] having index ‘2’. There is no next interval for [5,6] hence we have ‘-1’.
Example 2:
Input: Intervals [[3,4], [1,5], [4,6]]
Output: [2, -1, -1]
Explanation: The next interval of [3,4] is [4,6] which has index ‘2’. There is no next interval for [1,5] and [4,6].
*/

const Heap = require("collections/heap")

function findNextIntervals(intervals) {
  const result = Array(intervals.length).fill(-1)

  const maxEndTime = new Heap([], null, (a, b) => a[0] - b[0])
  const maxStartTime = new Heap([], null, (a, b) => a[0] - b[0])

  for (let [index, interval] of intervals.entries()) {
    const [start, end] = interval
    maxStartTime.push([start, index])
    maxEndTime.push([end, index])
  }

  while (maxEndTime.length) {
    const [curEnd, index] = maxEndTime.pop()

    let nextStart, nextIndex

    while (maxStartTime.length && maxStartTime.peek()[0] >= curEnd) {
      ;[nextStart, nextIndex] = maxStartTime.pop()
    }

    if (nextStart) {
      result[index] = nextIndex
      // push back
      maxStartTime.push([nextStart, nextIndex])
    }
  }

  return result
}

module.exports = {findNextIntervals}
