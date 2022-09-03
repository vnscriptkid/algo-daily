// There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’.
// Each task can have some prerequisite tasks which need to be completed before it can be scheduled
// Given the number of tasks and a list of prerequisite pairs,
// find out if it is possible to schedule all the tasks.

const Queue = require('collections/deque')

// Input: Tasks=3, Prerequisites=[0, 1], [1, 2], [2, 0]
// Output: false
// 0 -> 1 -> 2

// Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
// Output: true

function isSchedulingPossible(tasks, prerequisites) {
  const orderList = []
  // build graph, build incommings

  const graph = new Map()
  const incommings = new Map()

  for (let i = 0; i < tasks; i++) {
    graph.set(i, [])
    incommings.set(i, 0)
  }

  for (let [source, dest] of prerequisites) {
    graph.get(source).push(dest)
    incommings.set(dest, incommings.get(dest) + 1)
  }

  // `sources` will store tasks that have no deps
  const sources = new Queue()
  for (let [task, numOfDeps] of incommings.entries()) {
    if (numOfDeps === 0) sources.add(task)
  }

  // start scheduling
  while (sources.length) {
    // take out the next task to schedule
    const taskOut = sources.shift()

    // schedule it by adding to orderList
    orderList.push(taskOut)

    // update our incommings (-1)
    for (let dest of graph.get(taskOut)) {
      incommings.set(dest, incommings.get(dest) - 1)
      // if one task's deps reaches 0, add that task to `sources` queue for later process
      if (incommings.get(dest) === 0) sources.add(dest)
    }
  }

  return orderList.length === tasks
}

module.exports = {isSchedulingPossible}
