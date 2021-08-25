class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function rotate(head, k) {
  // Find LL length, find last node, make circular LL
  if (!head) return null;

  let cur = head;
  let length = 1;
  while (cur && cur.next) {
    length++;
    cur = cur.next;
  }

  // cur now is last node, make circular LL now
  cur.next = head;

  // find new k
  k %= length;

  // elements to skip
  const numSkippedNodes = length - k;

  // find new last of LL
  let newLastNode = head;
  let count = 1;
  while (count < numSkippedNodes) {
    newLastNode = newLastNode.next;
    count++;
  }

  const newHead = newLastNode.next;
  newLastNode.next = null;

  return newHead;
}

module.exports = { rotate, Node };
