// Given a binary tree, find its maximum depth (or height).

//     1
//    / \
//   2   3
//      / \
//      4  5
//        /
//        6

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function findMaxDepth(root) {
  const queue = [root]

  let depth = 0
  while (queue.length) {
    depth++
    // process 1 level of tree
    let levelSize = queue.length

    // take out all nodes of cur level
    while (levelSize > 0) {
      let nodeOut = queue.shift()

      for (let child of [nodeOut.left, nodeOut.right]) {
        if (child) queue.push(child)
      }

      levelSize--
    }
  }

  return depth
}

module.exports = {Node, findMaxDepth}
