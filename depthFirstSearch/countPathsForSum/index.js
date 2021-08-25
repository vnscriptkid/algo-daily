class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function countPaths(root, sum) {
  if (!root) return 0;

  if (!root.left && !root.right && root.val === sum) return 1;

  return (
    countPaths(root.left, sum - root.val) +
    countPaths(root.left, sum) +
    countPaths(root.right, sum - root.val) +
    countPaths(root.right, sum)
  );
}

module.exports = { countPaths, Node };
