const Queue = require("collections/deque")

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function traverse(root) {
  const result = []

  const queue = new Queue()
  queue.push(root)

  while (queue.length > 0) {
    let levelSize = queue.length

    const curLevel = []
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      curLevel.push(node.val)
    }
    result.unshift(curLevel)
  }

  return result
}

module.exports = {Node, traverse}
