// Given the head of a Singly LinkedList that contains a cycle,
// write a function to find the starting node of the cycle.

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function findCycleStart(head) {
  let slow = head,
    fast = head

  // find the meeting point
  do {
    slow = slow.next
    fast = fast.next.next
  } while (slow !== fast)

  let slow2 = head

  while (slow2 !== slow) {
    slow = slow.next
    slow2 = slow2.next
  }

  return slow.val
}

module.exports = {Node, findCycleStart}
