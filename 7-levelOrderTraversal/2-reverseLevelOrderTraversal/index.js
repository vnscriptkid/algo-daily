const Queue = require('collections/deque')

//      1
//     / \
//    3   4
//   / \ / \
//  5  6 7  8

// queue: -> [ ] ->
// outNode: 8
// result: [[5, 6, 7, 8], [3 , 4], [1]]
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
    let levelSize = queue.length
    result.unshift([])
    while (levelSize > 0) {
      let nodeOut = queue.shift()
      result[0].push(nodeOut.val)

      if (nodeOut.left) queue.push(nodeOut.left)
      if (nodeOut.right) queue.push(nodeOut.right)

      levelSize--
    }
  }

  return result
}

module.exports = {traverse, Node}
