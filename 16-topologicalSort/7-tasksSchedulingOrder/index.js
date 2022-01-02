// Tasks Scheduling Order

// There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’.
// Each task can have some prerequisite tasks which need to be completed before it can be scheduled.
// Given the number of tasks and a list of prerequisite pairs, write a method to find the ordering of tasks we should pick to finish all tasks.

// Input: Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
// Output: [0 1 4 3 2 5]
// Explanation: A possible scheduling of tasks is: [0 1 4 3 2 5]

function findExecutionOrder(tasks, prerequisites) {
  // init graph and incommings map
  const graph = new Map()
  const incommings = new Map()
  for (let task of Array(tasks).keys()) {
    graph.set(task, [])
    incommings.set(task, 0)
  }

  // feed data to graph and incommings map
  for (let [fromTask, toTask] of prerequisites) {
    graph.get(fromTask).push(toTask)
    incommings.set(toTask, incommings.get(toTask) + 1)
  }

  // feed sources
  const sources = []
  for (let [task, numOfDeps] of incommings.entries()) {
    if (numOfDeps === 0) sources.push(task)
  }

  // init orderLists
  const orderLists = []

  // build orderLists
  while (sources.length) {
    const taskOut = sources.shift()

    orderLists.push(taskOut)

    // update incommings
    for (let dest of graph.get(taskOut)) {
      incommings.set(dest, incommings.get(dest) - 1)

      if (incommings.get(dest) === 0) sources.push(dest)
    }
  }

  // return orderLists
  return orderLists
}

module.exports = {findExecutionOrder}
