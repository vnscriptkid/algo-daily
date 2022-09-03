const Heap = require('collections/heap')

class Interval {
  constructor(start, end, employeeIndex, intervalIndex) {
    this.start = start
    this.end = end
    this.employeeIndex = employeeIndex
    this.intervalIndex = intervalIndex
  }
}

function findCommonFreetime(schedule) {
  // output
  const freetime = []
  // init min heap to get out the interval that starts earliest
  const minHeap = new Heap([], null, (a, b) => b.start - a.start)
  // push first interval from each employee's schedule
  for (let [employeeIndex, employeeSchedule] of schedule.entries()) {
    let [start, end] = employeeSchedule[0]
    minHeap.push(new Interval(start, end, employeeIndex, 0))
  }

  // init prev
  let prev = minHeap.peek()
  let cur = null
  // loop: as long as min heap is not empty
  while (minHeap.length) {
    // pop out 1 interval from heap
    cur = minHeap.pop()
    // compare 2 intervals iteratively, by keeping track of prev and cur
    if (cur.start > prev.end) {
      // case 1: there's a gap between 2 intervals => update freetime
      freetime.push([prev.end, cur.start])
      prev = cur
    } else {
      // case 2: conflict => the one ends last becomes new prev
      if (cur.end > prev.end) prev = cur
    }

    const curEmployeeSchedule = schedule[cur.employeeIndex]
    if (cur.intervalIndex < curEmployeeSchedule.length - 1) {
      let [start, end] = curEmployeeSchedule[cur.intervalIndex + 1]
      minHeap.push(
        new Interval(start, end, cur.employeeIndex, cur.intervalIndex + 1),
      )
    }
  }

  return freetime
}

module.exports = {findCommonFreetime}
