const Queue = require('collections/deque')

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function rightView(root) {
  const result = []

  const queue = new Queue()
  queue.push(root)

  while (queue.length > 0) {
    const levelWidth = queue.length

    for (let i = 0; i < levelWidth; i++) {
      const node = queue.shift()

      if (i === levelWidth - 1) result.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return result
}

module.exports = {rightView, Node}
