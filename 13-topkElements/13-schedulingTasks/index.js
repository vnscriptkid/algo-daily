const Heap = require('collections/heap')

function scheduleTasks(tasks, k) {
  // feed tasks into freq map
  const freq = {}
  for (let task of tasks) {
    if (!(task in freq)) freq[task] = 0
    freq[task]++
  }
  // feed tasks into a max heap
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])
  for (let task in freq) {
    maxHeap.add([task, freq[task]])
  }
  // init a queue to simulate waiting time
  let minCpuIntervals = 0
  // take one by one from heap
  while (maxHeap.length > 0) {
    const queue = []
    let n = k + 1

    while (n > 0 && maxHeap.length) {
      const [task, count] = maxHeap.pop()
      if (count > 1) {
        queue.push([task, count - 1])
      }
      minCpuIntervals++
      n--
    }

    while (queue.length) {
      const [task, count] = queue.shift()
      maxHeap.add([task, count])
    }

    if (maxHeap.length > 0) {
      minCpuIntervals += n
    }
  }
  // return minCpuIntervals
  return minCpuIntervals
}

module.exports = {scheduleTasks}
