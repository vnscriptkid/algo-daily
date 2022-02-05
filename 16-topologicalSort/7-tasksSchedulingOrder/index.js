// Tasks Scheduling Order

// There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’.
// Each task can have some prerequisite tasks which need to be completed before it can be scheduled.
// Given the number of tasks and a list of prerequisite pairs, write a method to find the ordering of tasks we should pick
// to finish all tasks.

// Input: Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
// 2 -> 5
// Explanation: To execute task '5', task '2' needs to finish first ...
// Output: [0 1 4 3 2 5]
// Explanation: A possible scheduling of tasks is: [0 1 4 3 2 5]

function findExecutionOrder(tasks, prerequisites) {
  // build a graph (adjadency list)
  // incomings map
  const graph = new Map()
  const incommings = new Map()

  for (let task of Array(tasks).keys()) {
    graph.set(task, [])
    incommings.set(task, 0)
  }

  for (let [from, to] of prerequisites) {
    graph.get(from).push(to)
    incommings.set(to, incommings.get(to) + 1)
  }

  // queue to store tasks that are available to be executed
  const queue = [] // enqueue: push, dequeue: pop
  // feed the queue with tasks that has no deps
  for (let [task, numOfDeps] of incommings.entries()) {
    if (numOfDeps === 0) queue.push(task)
  }

  // find the ordering by taking one by one from the queue
  const ordering = []

  while (queue.length) {
    const taskOut = queue.shift()

    ordering.push(taskOut)

    for (let dest of graph.get(taskOut)) {
      incommings.set(dest, incommings.get(dest) - 1)

      if (incommings.get(dest) === 0) queue.push(dest)
    }
  }

  return ordering
}

module.exports = {findExecutionOrder}
