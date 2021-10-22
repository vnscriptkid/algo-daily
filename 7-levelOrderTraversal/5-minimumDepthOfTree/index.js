// Minimum Depth of a Binary Tree
// Find the minimum depth of a binary tree.
// The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function minimumDepth(root) {
  const queue = [root]
  let level = 0

  while (queue.length) {
    let levelSize = queue.length
    level++

    while (levelSize > 0) {
      const nodeOut = queue.shift()

      if (!nodeOut.left && !nodeOut.right) return level

      for (let child of [nodeOut.left, nodeOut.right]) {
        if (child) queue.push(child)
      }

      levelSize--
    }
  }

  return -1
}

module.exports = {Node, minimumDepth}
