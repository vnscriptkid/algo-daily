class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function cycleLength(head) {
  // find the meeting point between slow and fast
  let slow = (fast = head);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }

  // move temp pointer from meeting point until it comes back, count along the way
  let temp = slow;
  let count = 0;
  do {
    temp = temp.next;
    count++;
  } while (temp !== slow);

  return count;
}

module.exports = { Node, cycleLength };
