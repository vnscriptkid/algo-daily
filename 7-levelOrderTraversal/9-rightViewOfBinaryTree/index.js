class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function rightView(root) {
  const queue = [root]

  const result = []

  while (queue.length) {
    let levelSize = queue.length

    while (levelSize > 0) {
      const {left, right, val} = queue.shift()

      if (levelSize === 1) result.push(val)

      for (let child of [left, right]) {
        if (child) queue.push(child)
      }

      levelSize--
    }
  }

  return result
}

module.exports = {rightView, Node}
