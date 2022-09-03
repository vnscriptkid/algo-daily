// Topological Sort of a directed graph (a graph with unidirectional edges)
// is a linear ordering of its vertices such that for every directed edge (U, V) from vertex U to vertex V,
// U comes before V in the ordering.

// Given a directed graph, find the topological ordering of its vertices.

function topoSort(vertices, edges) {
  // build graph using adjacency list
  // build a map { vertex: numOfIncomming }
  const graph = new Map() //
  const incommings = new Map()
  // { 0: [], 1: [] }
  for (let i = 0; i < vertices; i++) {
    graph.set(i, [])
    incommings.set(i, 0)
  }

  for (let [from, to] of edges) {
    graph.get(from).push(to)
    incommings.set(to, incommings.get(to) + 1)
  }

  // build queue keeping vertices with no incomming
  const queue = [] // shift: dequeue, push: enqueue
  for (let [vertex, totalIncommings] of incommings.entries()) {
    if (totalIncommings === 0) queue.push(vertex)
  }

  // result
  const result = []

  // loop as long as there's somethign in queue
  while (queue.length) {
    // pop out
    const nextVertex = queue.shift()
    // push in result
    result.push(nextVertex)
    // update incomming map
    for (let child of graph.get(nextVertex)) {
      incommings.set(child, incommings.get(child) - 1)
      // if incomming === 0 => push in queue
      if (incommings.get(child) === 0) queue.push(child)
    }
  }
  // return result

  return result
}

module.exports = {topoSort}
