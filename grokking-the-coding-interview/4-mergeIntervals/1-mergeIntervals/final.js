function merge(intervals = []) {
  const mergedIntervals = []
  // sort by starting time

  intervals.sort((a, b) => a[0] - b[0])

  // init prev interval as first one
  let [start, end] = intervals[0]

  // loop from second interval
  for (let i = 1; i < intervals.length; i++) {
    let curInterval = intervals[i]
    // Q: can current interval extend prev one
    if (curInterval[0] <= end) {
      // overlap
      end = Math.max(end, curInterval[1])
    } else {
      mergedIntervals.push([start, end])
      start = curInterval[0]
      end = curInterval[1]
    }
  }

  mergedIntervals.push([start, end])

  return mergedIntervals
}

module.exports = {merge}
