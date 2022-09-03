const Queue = require('collections/deque')

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function traverse(root) {
  const result = []

  let leftToRight = true
  const queue = new Queue()
  queue.push(root)

  while (queue.length > 0) {
    let levelSize = queue.length
    let curLevel = []

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      if (leftToRight) curLevel.push(node.val)
      else curLevel.unshift(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(curLevel)
    leftToRight = !leftToRight
  }

  return result
}

module.exports = {Node, traverse}
