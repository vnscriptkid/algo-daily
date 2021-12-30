// Count Paths for a Sum

// Given a binary tree and a number ‘S’, find all paths in the tree such that
// the sum of all the node values of each path equals ‘S’.
// Please note that the paths can start or end at any node but
//  all paths must follow direction from parent to child (top to bottom).

// S = 11
//     12
//    /  \
//   7    1
//  /    / \
// 4    10  5

// []

// [7, 4], [1, 10]

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function countPaths(root, target, curPath = [], count = {current: 0}) {
  if (!root) return 0

  // visit the current node
  curPath.push(root.val)

  // check sum of all paths that ends at current node
  let curSum = 0
  for (let i = curPath.length - 1; i >= 0; i--) {
    curSum += curPath[i]

    if (curSum === target) count.current++
  }

  // traverse down the tree
  for (let child of [root.left, root.right]) {
    if (child) {
      countPaths(child, target, curPath, count)
      curPath.pop()
    }
  }

  return count.current
}

module.exports = {countPaths, Node}
