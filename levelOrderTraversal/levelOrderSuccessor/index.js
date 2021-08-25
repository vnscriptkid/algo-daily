const Queue = require("collections/deque");

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findLevelOrderSuccessor(root, givenNum) {
  const queue = new Queue();
  queue.push(root);

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    if (node.val === givenNum) break;
  }

  return queue.length > 0 ? queue.peek().val : null;
}

module.exports = { findLevelOrderSuccessor, Node };
