const Queue = require('collections/deque')

function findExecutionOrder(numOfTasks, prerequisites) {
  // build the graph, indegrees map
  const graph = Array(numOfTasks)
    .fill(0)
    .map(() => Array())
  const indegrees = Array(numOfTasks).fill(0)

  for (let [from, to] of prerequisites) {
    graph[from].push(to)
    indegrees[to] += 1
  }

  // find source tasks
  const sources = new Queue()
  for (let [task, incomming] of indegrees.entries()) {
    if (incomming === 0) sources.push(task)
  }

  // find the order
  const sortedOrder = []
  while (sources.length) {
    const task = sources.shift()

    sortedOrder.push(task)

    for (let neighbor of graph[task]) {
      indegrees[neighbor] -= 1
      if (indegrees[neighbor] === 0) sources.push(neighbor)
    }
  }

  return sortedOrder
}

module.exports = {findExecutionOrder}
