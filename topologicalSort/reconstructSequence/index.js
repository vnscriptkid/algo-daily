const Queue = require('collections/deque')

function canReconstruct(original, seqs) {
  // build graph, indegrees
  const graph = new Map()
  const indegrees = new Map()
  // init
  for (let seq of seqs) {
    for (let vertex of seq) {
      if (!graph.has(vertex)) graph.set(vertex, [])

      if (!indegrees.has(vertex)) indegrees.set(vertex, 0)
    }
  }
  // add data
  for (let seq of seqs) {
    for (let [index, prev] of seq.entries()) {
      if (index === seq.length - 1) continue
      const next = seq[index + 1]
      graph.get(prev).push(next)
      indegrees.set(next, indegrees.get(next) + 1)
    }
  }

  // find sources
  const sources = new Queue()
  for (let [vertex, incommings] of indegrees) {
    if (incommings === 0) sources.push(vertex)
  }

  const sortedList = []
  while (sources.length) {
    // if there's more than 1 source, means there's more than 1 way to reconstruct the sequence
    if (sources.length > 1) return false

    if (sources.peek() !== original[sortedList.length]) return false

    const vertex = sources.shift()

    sortedList.push(vertex)

    for (let nextVertex of graph.get(vertex)) {
      indegrees.set(nextVertex, indegrees.get(nextVertex) - 1)

      if (indegrees.get(nextVertex) === 0) {
        sources.push(nextVertex)
      }
    }
  }

  return sortedList.length === original.length
}

module.exports = {canReconstruct}
