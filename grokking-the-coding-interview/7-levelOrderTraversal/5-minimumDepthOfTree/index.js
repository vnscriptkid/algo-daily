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

function minimumDepth(root) {
  const queue = [root]

  let level = 0

  while (queue.length) {
    level++
    let levelSize = queue.length

    while (levelSize > 0) {
      const nodeOut = queue.shift()

      const isLeafNode = !nodeOut.left && !nodeOut.right

      if (isLeafNode) return level

      for (let child of [nodeOut.left, nodeOut.right]) {
        if (child) queue.push(child)
      }

      levelSize--
    }
  }

  throw new Error('something went wrong')
}

module.exports = {Node, minimumDepth}
