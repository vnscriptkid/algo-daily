const Queue = require("collections/deque")

class Node {
  constructor(val, left = null, right = null, next = null) {
    this.val = val
    this.left = left
    this.right = right
    this.next = null
  }
}

function connectAllLevelSiblings(root) {
  const queue = new Queue()
  queue.push(root)

  let prevNode = null
  while (queue.length > 0) {
    const curNode = queue.shift()

    if (prevNode) prevNode.next = curNode
    prevNode = curNode

    if (curNode.left) queue.push(curNode.left)
    if (curNode.right) queue.push(curNode.right)
  }
  return root
}

module.exports = {connectAllLevelSiblings, Node}
