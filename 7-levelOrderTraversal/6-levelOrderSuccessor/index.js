// Level Order Successor

// Given a binary tree and a node, find the level order successor of the given node in the tree.
// The level order successor is the node that appears right after the given node in the level order traversal.

//    1
//   / \
//  2   3
//     / \
//    4   5

// target: 3
//  <- [ 4, 5 ] <-
// 3

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function findLevelOrderSuccessor(root, givenNum) {
  const queue = [root]

  while (queue.length) {
    const nodeOut = queue.shift()

    for (let child of [nodeOut.left, nodeOut.right]) {
      if (child) queue.push(child)
    }

    if (nodeOut.val === givenNum) return queue.length ? queue[0].val : null
  }

  return null
}

module.exports = {Node, findLevelOrderSuccessor}
