const Queue = require("collections/deque");

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function minimumDepth(root) {
  const queue = new Queue();
  queue.push(root);
  if (!root) return 0;
  let curDepth = 0;

  while (queue.length > 0) {
    let levelWidth = queue.length;
    curDepth += 1;
    for (let i = 0; i < levelWidth; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) return curDepth;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return curDepth;
}

module.exports = { minimumDepth, Node };
