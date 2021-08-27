// Given a binary tree, populate an array to represent its level-by-level traversal.
// You should populate the values of all nodes of each level from left to right in separate sub-arrays.

//     1
//    / \
//   2   3
//  / \ / \
// 4  5 6  7

// [[1], [2, 3], [4, 5, 6, 7]]

// queue: ->|  |->
// out: 7
// result [[1], [2, 3], [4, 5, 6, 7]]

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function traverse(root) {
  const queue = [root] // push (enqueue), shift (dequeue)
  const result = []

  while (queue.length) {
    let levelSize = queue.length
    result.push([])
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift()
      result[result.length - 1].push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return result
}

module.exports = {Node, traverse}
