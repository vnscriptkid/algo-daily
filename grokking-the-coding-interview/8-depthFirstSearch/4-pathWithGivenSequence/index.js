// Path With Given Sequence

// Given a binary tree and a sequence, find if the sequence is present as a root-to-leaf path in the given tree.

// [1, 9, 9]

//    1
//   / \
//  7   9
//     / \
//    2   9

// keep track curIdx in sequence
// nodeVal !== seq[curIdx] returns false
// lastNumInSeq && leafNode && nodeVal === seq[curIdx] returns true

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function hasPathWithSequence(root, sequence, curIdx = 0) {
  if (!root) return false

  const matchingValues = root.val === sequence[curIdx]

  if (!matchingValues) return false

  const lastNumInSeq = curIdx === sequence.length - 1
  const leafNode = !root.left && !root.right

  if (lastNumInSeq && leafNode) return true

  for (let child of [root.left, root.right]) {
    if (child) {
      if (hasPathWithSequence(child, sequence, curIdx + 1) === true) return true
    }
  }

  return false
}

module.exports = {Node, hasPathWithSequence}
