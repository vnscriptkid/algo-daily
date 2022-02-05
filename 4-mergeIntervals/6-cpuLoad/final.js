// Maximum CPU Load
// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running.
// Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

// Jobs: [[1,4,3], [2,5,4], [7,9,6]]
// Output: 7
// Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the
// jobs are running at the same time i.e., during the time interval (2,4).

const Heap = require('collections/heap')

function findMaxCpuLoad(jobs) {
  // Sort job by start time
  jobs.sort((a, b) => a[0] - b[0])

  // heap to take out job that ends earliest (min heap based on endTime)
  const concurrentJobs = new Heap([], null, (a, b) => b[1] - a[1])

  // keep track of current total load
  let totalLoad = 0
  let max = 0
  // looking at each job one by one
  for (let job of jobs) {
    // is there any job that is currently active when current job starts
    while (concurrentJobs.length && concurrentJobs.peek()[1] <= job[0]) {
      let jobOut = concurrentJobs.pop()
      totalLoad -= jobOut[2]
    }
    concurrentJobs.add(job)
    totalLoad += job[2]

    // update max
    max = Math.max(max, totalLoad)
  }

  return max
}

module.exports = {findMaxCpuLoad}
