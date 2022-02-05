// Connect Level Order Siblings

// Given a binary tree, connect each node with its level order successor.
// The last node of each level should point to a null node.

//     1 -> null
//    / \
//   2 -> 3 -> null
//  /\   / \
// 4->5->6->7->null

// <-[    ]<-

// nodesInCurLevel: 0
// 7 -> null

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
    // each iteration: queue stores all nodes of current level
    let levelSize = queue.length

    while (levelSize > 0) {
      const nodeOut = queue.shift()

      levelSize--

      if (levelSize === 0) nodeOut.next = null
      else nodeOut.next = queue[0]

      for (let child of [nodeOut.left, nodeOut.right]) {
        if (child) queue.push(child)
      }
    }
  }

  return root
}

module.exports = {connectLevelSiblings, Node}
