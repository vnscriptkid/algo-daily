const Heap = require("collections/heap")

function flatten(schedule) {
  const flatten = []
  for (let employeeSchedule of schedule) {
    for (let interval of employeeSchedule) {
      flatten.push(interval)
    }
  }
  return flatten
}

function findCommonFreetime(schedule) {
  // flatten schedule
  const flattenSchedule = flatten(schedule)

  // sort by starting time
  flattenSchedule.sort((a, b) => a[0] - b[0])

  // output
  const freetime = []

  // init heap storing active working time
  const activeIntervals = new Heap([], null, (a, b) => b[1] - a[1])

  // loop through flatten schedule
  for (let curInterval of flattenSchedule) {
    // pop out interval that already finished
    let lastPoppedout = null
    while (
      activeIntervals.length &&
      curInterval[0] > activeIntervals.peek()[1]
    ) {
      lastPoppedout = activeIntervals.pop()
    }

    // if heap is empty: save the interval between last-poped-out and current interval as freetime
    if (activeIntervals.length === 0 && lastPoppedout) {
      freetime.push([lastPoppedout[1], curInterval[0]])
    }

    // push current interval
    activeIntervals.push(curInterval)
  }

  // return output
  return freetime
}

module.exports = {findCommonFreetime}
