// Right view of binary tree

// Given a binary tree, return an array containing nodes in its right view.
// The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.

//       1
//      / \
//     2   3
//    / \ / \
//   4  5 6  7

// [ 4, 5, 6, 7 ]
// levelSize = 0
// 3

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function rightView(root) {
  const queue = [root]
  // queue to go level by level

  let result = []

  while (queue.length) {
    // loop: process 1 level in 1 iteration
    let levelSize = queue.length

    while (levelSize > 0) {
      levelSize--

      const node = queue.shift() // dequeue
      // push new nodes to queue
      for (let child of [node.left, node.right]) {
        if (child) queue.push(child)
      }
      // check if we're at last of 1 level => push to result
      if (levelSize === 0) result.push(node.val)
    }
  }

  return result
}

module.exports = {rightView, Node}
