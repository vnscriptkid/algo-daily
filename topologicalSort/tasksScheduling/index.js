const Queue = require("collections/deque")

function isSchedulingPossible(tasks, prerequisites) {
  // build graph, indegrees map
  const graph = Array(tasks)
    .fill(0)
    .map(() => Array())
  const inDegrees = Array(tasks).fill(0)

  for (let [sourceTask, dependentTask] of prerequisites) {
    graph[sourceTask].push(dependentTask)
    inDegrees[dependentTask] += 1
  }

  // Use indegrees to check which task has no dependency, add to sources
  const sources = new Queue()
  for (let [task, indeg] of inDegrees.entries()) {
    if (indeg === 0) sources.push(task)
  }

  // sortedList stores tasks in topological order
  const sortedList = []

  // as long as there's something in sources
  while (sources.length) {
    const task = sources.shift()

    sortedList.push(task)

    for (let neighbor of graph[task]) {
      inDegrees[neighbor] -= 1

      if (inDegrees[neighbor] === 0) sources.push(neighbor)
    }
  }

  // return
  return sortedList.length === tasks
}

module.exports = {isSchedulingPossible}
