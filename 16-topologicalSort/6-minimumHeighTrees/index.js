// Minimum Height Trees

// We are given an undirected graph that has characteristics of a k-ary tree.
// In such a graph, we can choose any node as the root to make a k-ary tree.
// The root (or the tree) with the minimum height will be called Minimum Height Tree (MHT).
// There can be multiple MHTs for a graph.
// In this problem, we need to find all those roots which give us MHTs.
// Write a method to find all MHTs of the given graph and return a list of their roots.

// 1--2--3

// 1 is root node => height: 3
// 2 is root node => height: 2
// 3 is root node => height: 3
// [2]

// 1--2--3--4

// 1 is root node => h: 4
// 2 is root node => h: 3
// 3 is root node => h: 3
// 4 is root node => h: 4
// [2,3]

// 1--2--3--4--5
// 3 is root node => h: 3
// [3]

function findTrees(vertices, edges) {
  // init graph, incommings
  const graph = new Map()
  const incommings = new Map()

  for (let vertex of Array(vertices).keys()) {
    graph.set(vertex, [])
    incommings.set(vertex, 0)
  }

  // build graph, incommings
  for (let [node1, node2] of edges) {
    graph.get(node1).push(node2)
    graph.get(node2).push(node1)

    incommings.set(node1, incommings.get(node1) + 1)
    incommings.set(node2, incommings.get(node2) + 1)
  }

  // init a queue containing next nodes to be processed (leaves node to be pruned)
  const leaves = []

  // feed the queue with initial state
  for (let [vertex, numOfIncommings] of incommings.entries()) {
    if (numOfIncommings === 1) leaves.push(vertex)
  }

  let nodesLeft = vertices

  // start pruning util there is 1 or 2 nodes left
  while (nodesLeft > 2 && leaves.length > 0) {
    let nodesToBePruned = leaves.length

    nodesLeft -= nodesToBePruned

    while (nodesToBePruned > 0) {
      const node = leaves.shift()

      for (let neighbor of graph.get(node)) {
        incommings.set(neighbor, incommings.get(neighbor) - 1)

        if (incommings.get(neighbor) === 1) leaves.push(neighbor)
      }

      nodesToBePruned--
    }
  }

  // return 1 or 2 nodes
  return leaves
}

module.exports = {findTrees}
