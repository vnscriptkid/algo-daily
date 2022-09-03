// Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

//         1
//       /  \
//      2    3
//     / \  / \
//     4  5 6  7

// queue: -> [  ] ->
// reversed = false;
// levelSize: 4
// nodeOut: 7
// result [[1], [3, 2], [4, 5, 6, 7]]

// output: [[1], [3, 2], [4, 5, 6, 7]]

const Queue = require('collections/deque')

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function traverse(root) {
  let queue = new Queue()
  queue.add(root)

  let result = []
  let reversed = false

  while (queue.length) {
    // process next level
    let levelSize = queue.length
    result.push([])

    while (levelSize > 0) {
      let nodeOut = queue.shift()

      let lastSubarr = result[result.length - 1]
      if (!reversed) lastSubarr.push(nodeOut.val)
      else lastSubarr.unshift(nodeOut.val)

      // enqueue children of nodeout
      if (nodeOut.left) queue.add(nodeOut.left)
      if (nodeOut.right) queue.add(nodeOut.right)

      // process
      levelSize--
    }

    reversed = !reversed
  }

  return result
}

module.exports = {Node, traverse}
