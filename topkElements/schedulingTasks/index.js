const Heap = require("collections/heap")

function scheduleTasks(tasks, k) {
  // create task-freq map
  const freq = {}
  for (let task of tasks) {
    if (!(task in freq)) freq[task] = 0
    freq[task] += 1
  }

  // push tasks to maxHeap
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])
  for (let [task, count] of Object.entries(freq)) {
    maxHeap.add([task, count])
  }

  // make a queue
  let intervals = 0

  while (maxHeap.length) {
    const waitingList = []
    let n = k + 1

    while (n > 0 && maxHeap.length) {
      n--
      intervals++

      const [task, count] = maxHeap.pop()

      if (count > 1) {
        waitingList.push([task, count - 1])
      }
    }

    // push back to maxHeap for the next round
    waitingList.forEach(item => maxHeap.push(item))

    if (maxHeap.length) {
      intervals += n // n here is a cooling period
    }
  }

  return intervals
}

const tasks = ["a", "a", "a", "b", "c", "c"],
  K = 2
const result = scheduleTasks(tasks, K)

module.exports = {scheduleTasks}
