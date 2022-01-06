// Problem 1: Given the head of a LinkedList with a cycle, find the length of the cycle.

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

// 1->2->3->4->5
//       ^     |
//       |_____|

function cycleLength(head) {
  // where do slow and fast meet?
  let slow = head,
    fast = head

  do {
    slow = slow.next
    fast = fast.next.next
  } while (slow !== fast)

  // find start of cycle
  let slow2 = slow

  // length of cycle
  let length = 0
  do {
    slow2 = slow2.next
    length++
  } while (slow2 !== slow)

  return length
}

module.exports = {Node, cycleLength}
