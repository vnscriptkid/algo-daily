const Queue = require('collections/deque')

function topoSort(vertices, edges) {
  // build graph using adjacency list
  // traverse graph, build indegree map that counts # of incomming vertices of each vertex
  const graph = new Map()
  const inDegrees = new Map()

  for (let vertex of Array(vertices).keys()) {
    graph.set(vertex, [])
    inDegrees.set(vertex, 0)
  }

  for (let [from, to] of edges) {
    graph.get(from).push(to)

    inDegrees.set(to, inDegrees.get(to) + 1)
  }

  // push all vertices with no incomming vertex to sources
  const sources = new Queue()
  for (let [vertex, indeg] of inDegrees.entries()) {
    if (indeg === 0) sources.push(vertex)
  }

  const sortedList = []

  // as long as there's still something in sources
  while (sources.length) {
    const curVertex = sources.shift()

    sortedList.push(curVertex)

    for (let neighbor of graph.get(curVertex)) {
      inDegrees.set(neighbor, inDegrees.get(neighbor) - 1)

      if (inDegrees.get(neighbor) === 0) sources.push(neighbor)
    }
  }

  // return sorted list
  return sortedList
}

module.exports = {topoSort}
