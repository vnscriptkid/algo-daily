const Queue = require('collections/deque')

class Node {
  constructor(val, left = null, right = null, next = null) {
    this.val = val
    this.left = left
    this.right = right
    this.next = next
  }
}

function connectLevelSiblings(root) {
  const queue = new Queue()
  queue.push(root)

  while (queue.length > 0) {
    let levelWidth = queue.length

    let prevNode = null
    for (let i = 0; i < levelWidth; i++) {
      const node = queue.shift()
      if (prevNode) prevNode.next = node
      prevNode = node

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return root
}

module.exports = {connectLevelSiblings, Node}
