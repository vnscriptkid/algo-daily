// Level Averages in a Binary Tree
// Given a binary tree, populate an array to represent the averages of all of its levels.

//     1
//    / \
//   2   3
//  /\   /\
// 4  5  6 7

// [1, 2.5, 5.5]

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
