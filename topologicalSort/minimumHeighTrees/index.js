const Queue = require("collections/deque")

function findTrees(numOfNodes, edges) {
  // build the graph, indegrees
  const graph = Array(numOfNodes)
    .fill(0)
    .map(() => Array())
  const indegrees = Array(numOfNodes).fill(0)

  for (let [node1, node2] of edges) {
    graph[node1].push(node2)
    graph[node2].push(node1)

    indegrees[node1] += 1
    indegrees[node2] += 1
  }

  // find leave nodes
  const leaves = new Queue()
  for (let [node, incommings] of indegrees.entries()) {
    if (incommings === 1) leaves.add(node)
  }

  // prune the leaves gradually
  let n = numOfNodes
  while (n > 2) {
    const leavesSize = leaves.length
    n -= leavesSize

    for (let i = 0; i < leavesSize; i++) {
      const leave = leaves.shift()

      for (let neighbor of graph[leave]) {
        indegrees[neighbor] -= 1

        if (indegrees[neighbor] === 1) leaves.push(neighbor)
      }
    }
  }

  return Array.from(leaves)
}

module.exports = {findTrees}
