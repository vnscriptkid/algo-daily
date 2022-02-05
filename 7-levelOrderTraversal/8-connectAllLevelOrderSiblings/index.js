// Connect All Level Order Siblings

// Given a binary tree, connect each node with its level order successor.
// The last node of each level should point to the first node of the next level.

class Node {
  constructor(val, left = null, right = null, next = null) {
    this.val = val
    this.left = left
    this.right = right
    this.next = next
  }
}

//    1
//   / \
//  2   3
// / \ / \
//4  5 6  7

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null

//         1
//        /  \
//       2    3
//      / \  / \
//     4  5 6  7

// use level order travesal using queue

// queue:  <- [  ] <-

// nodeOut: 7

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null

function connectAllLevelSiblings(root) {
  const queue = [root] // push (enqueue), shift (dequeue)

  while (queue.length) {
    // take out 1 node from queue
    const nodeOut = queue.shift()

    // find it's children, add to the queue
    for (let child of [nodeOut.left, nodeOut.right]) {
      if (child) queue.push(child)
    }

    // make connection from nodeOut to node at the head of the queue
    if (queue.length) nodeOut.next = queue[0]
  }

  return root
}

module.exports = {connectAllLevelSiblings, Node}
