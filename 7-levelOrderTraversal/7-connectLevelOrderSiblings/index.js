// Connect Level Order Siblings

// Given a binary tree, connect each node with its level order successor.
// The last node of each level should point to a null node.

class Node {
  constructor(val, left = null, right = null, next = null) {
    this.val = val
    this.left = left
    this.right = right
    this.next = next
  }
}

function connectLevelSiblings(root) {
  const queue = [root]

  while (queue.length) {
    let levelSize = queue.length

    let prevNode = null

    while (levelSize > 0) {
      let curNode = queue.shift()

      if (prevNode) prevNode.next = curNode

      for (let child of [curNode.left, curNode.right]) {
        if (child) queue.push(child)
      }

      prevNode = curNode
      levelSize--
    }
  }

  return root
}

module.exports = {connectLevelSiblings, Node}
