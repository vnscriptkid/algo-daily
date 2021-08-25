class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function hasPathSumTo(root, sum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    // is leaf node
    return sum === root.val;
  }

  return (
    hasPathSumTo(root.left, sum - root.val) ||
    hasPathSumTo(root.right, sum - root.val)
  );
}

module.exports = { hasPathSumTo, Node };
