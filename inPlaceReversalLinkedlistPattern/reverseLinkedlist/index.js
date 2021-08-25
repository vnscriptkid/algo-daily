class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverse(head) {
  let cur = head;
  let prev = null;

  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    // loop
    prev = cur;
    cur = temp;
  }

  return prev;
}

module.exports = { reverse, Node };
