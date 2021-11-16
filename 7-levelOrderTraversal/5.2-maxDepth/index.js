// Minimum Depth of a Binary Tree
// Find the minimum depth of a binary tree.
// The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

//     1
//    / \
//   2   3
//      / \
//      4  5
//        /
//        6

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function findMaxDepth(root) {
  const queue = [root]

  let depth = 0

  while (queue.length) {
    depth++
    let levelSize = queue.length

    while (levelSize) {
      const nodeOut = queue.shift()

      for (let child of [nodeOut.left, nodeOut.right]) {
        if (child) queue.push(child)
      }

      levelSize--
    }
  }

  return depth
}

module.exports = {Node, findMaxDepth}
