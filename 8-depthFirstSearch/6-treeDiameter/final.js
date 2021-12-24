class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function height(root) {
  if (!root) return 0

  return 1 + Math.max(height(root.left), height(root.right))
}

function findTreeDiameter(root) {
  if (!root) return 0

  return Math.max(
    findTreeDiameter(root.left),
    findTreeDiameter(root.right),
    1 + height(root.left) + height(root.right),
  )
}

module.exports = {Node, findTreeDiameter}
