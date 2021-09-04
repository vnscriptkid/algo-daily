const Queue = require('collections/deque')
// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

//      1
//     / \
//    3   4
//   / \ / \
//  5  6 7  8

// result: [[5, 6, 7, 8], [3 , 4], [1]]
// queue: -> [1] ->
// outNode: 8
class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function traverse(head) {
  const queue = new Queue()
  queue.push(head)
  const result = []

  while (queue.length) {
    let levelWidth = queue.length

    result.unshift([])

    while (levelWidth > 0) {
      let nodeOut = queue.shift()

      result[0].push(nodeOut.val)

      if (nodeOut.left) queue.push(nodeOut.left)
      if (nodeOut.right) queue.push(nodeOut.right)

      levelWidth--
    }
  }

  return result
}

module.exports = {traverse, Node}
