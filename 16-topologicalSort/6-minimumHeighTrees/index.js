// Minimum Height Trees (hard)

// We are given an undirected graph that has characteristics of a k-ary tree.
// In such a graph, we can choose any node as the root to make a k-ary tree.
// The root (or the tree) with the minimum height will be called Minimum Height Tree (MHT).
// There can be multiple MHTs for a graph.
// In this problem, we need to find all those roots which give us MHTs.
// Write a method to find all MHTs of the given graph and return a list of their roots.

function findTrees(vertices, edges) {
  // init
  const graph = new Map()
  const incommings = new Map()
  for (let vertex of Array(vertices).keys()) {
    graph.set(vertex, [])
    incommings.set(vertex, 0)
  }
  // build graph and incommings map
  for (let [v1, v2] of edges) {
    graph.get(v1).push(v2)
    graph.get(v2).push(v1)

    incommings.set(v1, incommings.get(v1) + 1)
    incommings.set(v2, incommings.get(v2) + 1)
  }

  const leaves = []
  for (let [dest, numOfDeps] of incommings.entries()) {
    if (numOfDeps === 1) leaves.push(dest)
  }

  let nodesLeft = vertices

  // prune the leaves
  while (nodesLeft > 2) {
    // const leave = leaves.pop()
    // nodesLeft--
    let numOfLeaves = leaves.length
    nodesLeft -= numOfLeaves

    while (numOfLeaves > 0) {
      const leave = leaves.shift()

      for (let nextToLeave of graph.get(leave)) {
        incommings.set(nextToLeave, incommings.get(nextToLeave) - 1)

        if (incommings.get(nextToLeave) === 1) leaves.push(nextToLeave)
      }

      numOfLeaves--
    }
  }

  return leaves
}

module.exports = {findTrees}
