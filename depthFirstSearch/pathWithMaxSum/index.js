class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function largestSumRootToLeaf(root) {
  if (!root) return 0;

  return (
    root.val +
    Math.max(largestSumRootToLeaf(root.left), largestSumRootToLeaf(root.right))
  );
}

function maxSumPath(root) {
  if (!root) return 0;

  return Math.max(
    largestSumRootToLeaf(root.left) +
      largestSumRootToLeaf(root.right) +
      root.val,
    maxSumPath(root.left),
    maxSumPath(root.right)
  );
}

module.exports = { Node, maxSumPath };
