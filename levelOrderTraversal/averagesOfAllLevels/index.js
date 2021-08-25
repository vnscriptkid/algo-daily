const Queue = require("collections/deque");

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function levelAverages(root) {
  const result = [];

  const queue = new Queue();
  queue.push(root);

  while (queue.length > 0) {
    let levelSize = queue.length;
    let average = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      average += node.val / levelSize;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(average);
  }

  return result;
}

module.exports = { levelAverages, Node };
