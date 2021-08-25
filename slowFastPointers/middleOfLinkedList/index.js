class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function findMiddle(head) {
  let slow = (fast = head);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
}

module.exports = { Node, findMiddle };
