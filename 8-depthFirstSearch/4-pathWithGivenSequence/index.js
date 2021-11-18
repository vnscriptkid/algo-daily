// Path With Given Sequence

// Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function hasPathWithSequence(root, sequence, curIndex = 0) {
  if (!root) return false

  // leaf node
  const isLeafNode = !root.left && !root.right
  const isLastInSeq = curIndex === sequence.length - 1
  const isMatching = root.val === sequence[curIndex]

  if (isLeafNode && isLastInSeq && isMatching) return true

  if (isLeafNode || isLastInSeq || !isMatching) return false

  for (let child of [root.left, root.right]) {
    if (child) {
      if (hasPathWithSequence(child, sequence, curIndex + 1)) return true
    }
  }

  return false
}

module.exports = {Node, hasPathWithSequence}
