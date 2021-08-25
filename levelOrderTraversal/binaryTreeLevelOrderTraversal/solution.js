const Queue = require("collections/deque")

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function traverse(root) {
  const queue = new Queue()
  queue.push(root)

  const result = []
  while (queue.length > 0) {
    let levelSize = queue.length

    const currentLevel = []
    // Process all nodes from current level
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      currentLevel.push(node.val)
    }
    result.push(currentLevel)
  }
  return result
}

module.exports = {Node, traverse}
