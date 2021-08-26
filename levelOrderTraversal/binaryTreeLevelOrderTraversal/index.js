class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

class Queue {
  constructor() {
    this.data = []
  }

  enqueue(val) {
    this.data.push(val)
  }

  dequeue() {
    return this.data.shift()
  }

  empty() {
    return this.data.length === 0
  }
}

function traverse(root) {
  const result = []
  const queue = new Queue()

  queue.enqueue('x')
  queue.enqueue(root)

  while (!queue.empty()) {
    let node = queue.dequeue()
    if (node === 'x' && !queue.empty()) {
      queue.enqueue('x')
      result.push([])
    } else if (node === 'x') break
    else {
      if (node.left) queue.enqueue(node.left)
      if (node.right) queue.enqueue(node.right)
      result[result.length - 1].push(node.val)
    }
  }

  return result
}

module.exports = {Node, traverse}
