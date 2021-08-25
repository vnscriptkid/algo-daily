class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function hasPathWithSequence(root, sequence, curIndex = 0) {
  if (!root || root.val !== sequence[curIndex]) return false

  if (!root.left && !root.right && root.val === sequence[curIndex]) return true

  return (
    hasPathWithSequence(root.left, sequence, curIndex + 1) ||
    hasPathWithSequence(root.right, sequence, curIndex + 1)
  )
}

module.exports = {hasPathWithSequence, Node}
