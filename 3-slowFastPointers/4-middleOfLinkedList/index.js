// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

// If the total number of nodes in the LinkedList is even, return the second middle node.

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
// Output: 3

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
//                       $
//                                       ^
// Output: 4

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function findMiddle(head) {
  let slow = head,
    fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow.val
}

module.exports = {Node, findMiddle}
