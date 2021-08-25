function insert(intervals, newInterval) {
  const mergedIntervals = []

  // find all the intervals that ends before newInterval
  // which does not conflict with new one, so just push to result array
  let i = 0
  let curInterval = intervals[i]

  while (i < intervals.length && curInterval[1] < newInterval[0]) {
    mergedIntervals.push(curInterval)
    // loop
    curInterval = intervals[++i]
  }

  // find all the intervals that overlaps newInterval
  while (i < intervals.length && curInterval[0] <= newInterval[1]) {
    newInterval[0] = Math.min(curInterval[0], newInterval[0])
    newInterval[1] = Math.max(curInterval[1], newInterval[1])
    // loop
    curInterval = intervals[++i]
  }
  mergedIntervals.push(newInterval)

  // remainings have no conflict with newInterval, just push to result array
  while (i < intervals.length) {
    mergedIntervals.push(curInterval)
    // loop
    curInterval = intervals[++i]
  }

  return mergedIntervals
}

module.exports = {insert}
