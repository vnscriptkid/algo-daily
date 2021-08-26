class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function findCycleStart(head) {
  let slow = (fast = head)

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) break
  }

  fast = head

  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow.val
}

module.exports = {Node, findCycleStart}
