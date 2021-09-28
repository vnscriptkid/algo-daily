class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function levelAverages(root) {
  const queue = [root]

  const output = []

  while (queue.length) {
    let levelSize = queue.length
    let sum = 0

    let i = 0
    while (i < levelSize) {
      const nodeOut = queue.shift()

      sum += nodeOut.val

      for (let child of [nodeOut.left, nodeOut.right]) {
        if (child) queue.push(child)
      }

      i++
    }

    output.push(sum / levelSize)
  }

  return output
}

module.exports = {Node, levelAverages}
