// Connect All Level Order Siblings

// Given a binary tree, connect each node with its level order successor.
// The last node of each level should point to the first node of the next level.

class Node {
  constructor(val, left = null, right = null, next = null) {
    this.val = val
    this.left = left
    this.right = right
    this.next = next
  }
}

// [, 3]
// prev: 1
// cur: 2

function connectAllLevelSiblings(root) {
  const queue = [root]

  while (queue.length) {
    const nodeOut = queue.shift()

    for (let child of [nodeOut.left, nodeOut.right]) {
      if (child) queue.push(child)
    }

    let nextNode = queue.length ? queue[0] : null

    nodeOut.next = nextNode
  }

  return root
}

module.exports = {connectAllLevelSiblings, Node}
