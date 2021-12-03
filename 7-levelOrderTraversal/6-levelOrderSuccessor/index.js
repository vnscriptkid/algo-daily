// Level Order Successor

// Given a binary tree and a node, find the level order successor of the given node in the tree.
// The level order successor is the node that appears right after the given node in the level order traversal.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function findLevelOrderSuccessor(root, givenNum) {
  const queue = [root]

  let returnNow = false

  while (queue.length) {
    const nodeOut = queue.shift()

    if (returnNow) return nodeOut.val

    if (nodeOut.val === givenNum) returnNow = true

    for (let child of [nodeOut.left, nodeOut.right]) {
      if (child) queue.push(child)
    }
  }

  return null
}

module.exports = {Node, findLevelOrderSuccessor}
