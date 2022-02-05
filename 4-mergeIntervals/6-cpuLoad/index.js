// Maximum CPU Load

const Heap = require('collections/heap')

// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running.
// Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

// Jobs: [[1,4,3], [2,5,4], [7,9,6]]
// Output: 7
// Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the
// jobs are running at the same time i.e., during the time interval (2,4).

// 1  2  3  4  5  6  7  8  9
// [        ]
//    {        }
//                   (     )

// [3][  7 ][ 4][  0 ][  6 ]

// cpu load value updated when new task starts or old task ends
// keep track of currently running tasks (minHeap)

// (A, B, C, D) <- E

function findMaxCpuLoad(jobs) {
  // sort jobs by startTime
  jobs.sort((a, b) => a[0] - b[0])

  // minHeap based on endTime
  const concurrentlyRunningTasks = new Heap([], null, (a, b) => b[1] - a[1])

  let cpuMax = 0
  let currentCpu = 0

  for (let [startTime, endTime, cpuLoad] of jobs) {
    // here, we're looking at the next task
    concurrentlyRunningTasks.add([startTime, endTime, cpuLoad])
    currentCpu += cpuLoad

    // remove from heaps the tasks had ended when current task started
    while (
      concurrentlyRunningTasks.length > 0 &&
      concurrentlyRunningTasks.peek()[1] <= startTime
    ) {
      const taskOut = concurrentlyRunningTasks.pop()
      currentCpu -= taskOut[2]
    }

    cpuMax = Math.max(cpuMax, currentCpu)
  }

  return cpuMax
}

module.exports = {findMaxCpuLoad}
