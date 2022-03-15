// Scheduling Tasks (hard) #
// You are given a list of tasks that need to be run, in any order, on a server.
// Each task will take one CPU interval to execute but once a task has finished,
// it has a cooling period during which it can’t be run again.
// If the cooling period for all tasks is ‘K’ intervals,
// find the minimum number of CPU intervals that the server needs to finish all tasks.

const Heap = require('collections/heap')

// If at any time the server can’t execute any task then it must stay idle.

// Example 1:

// Input: [a, a, a, b, c, c], K=2
// Output: 7
// Explanation: a -> c -> b -> a -> c -> idle -> a

//

// Example 2:

// Input: [a, b, a], K=3
// Output: 5
// Explanation: a -> b -> idle -> idle -> a

function scheduleTasks(tasks, k) {
  // count freq of each task
  const freq = {}
  for (let task of tasks) {
    if (!(task in freq)) freq[task] = 0
    freq[task]++
  }
  // add [ task, taskFreq ] into maxHeap
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])
  for (let task in freq) {
    maxHeap.add([task, freq[task]])
  }
  // tasksCount
  let tasksCount = 0
  while (maxHeap.length) {
    // process in batch of k + 1
    let numOfTasksThisBatch = k + 1
    const queue = []
    while (numOfTasksThisBatch > 0 && maxHeap.length) {
      const [task, taskFreq] = maxHeap.pop()

      if (taskFreq - 1 > 0) {
        queue.push([task, taskFreq - 1])
      }

      numOfTasksThisBatch--
    }
    // do we have next batch?
    if (queue.length) {
      // yes: tasksCount += k + 1;
      tasksCount += k + 1

      queue.forEach(item => maxHeap.add(item))
    } else {
      // no: tasksCount += numOfTasksUsedInThisBatch
      tasksCount += k + 1 - numOfTasksThisBatch
    }
  }
  // return tasksCount
  return tasksCount
}

module.exports = {scheduleTasks}
