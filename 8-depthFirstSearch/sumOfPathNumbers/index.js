class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function _sumPathNumbers(root, pathSum) {
  if (!root) return 0

  pathSum = pathSum * 10 + root.val

  if (!root.left && !root.right) return pathSum

  return (
    _sumPathNumbers(root.left, pathSum) + _sumPathNumbers(root.right, pathSum)
  )
}

function sumPathNumbers(root) {
  return _sumPathNumbers(root, 0)
}

module.exports = {sumPathNumbers, Node}
