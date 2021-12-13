class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function countPaths(root, target, curPath = [], count = {current: 0}) {
  // visit cur node
  curPath.push(root.val)

  // calculate all sums ending at curNode
  let sum = 0
  for (let i = curPath.length - 1; i >= 0; i--) {
    sum += curPath[i]
    if (sum === target) count.current++
  }

  // recursive traversal
  for (let child of [root.left, root.right]) {
    if (child) {
      countPaths(child, target, curPath, count)
      // backtrack
      curPath.pop()
    }
  }

  return count.current
}

module.exports = {countPaths, Node}
