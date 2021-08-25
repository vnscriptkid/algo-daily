class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverse(head, k) {
  let cur = head;
  let prev = null;
  let reversed = true;

  while (cur) {
    // init new connections
    let lastOfPrevSublist = prev;
    let headOfCurSublist = cur;
    // check reversed to decide to reverse current sublist or not
    if (reversed) {
      let i = 0;
      while (cur && i < k) {
        const temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
        i++;
      }
      // connect the prev sublist
      if (lastOfPrevSublist) {
        lastOfPrevSublist.next = prev;
      } else {
        head = prev;
      }
      lastOfPrevSublist = headOfCurSublist;
      prev = lastOfPrevSublist;
      // connect the next sublist
      headOfCurSublist.next = cur;
    } else {
      let i = 0;
      while (cur && i < k) {
        prev = cur;
        cur = cur.next;
        i++;
      }
      lastOfPrevSublist = prev;
    }

    // flip reversed var
    reversed = !reversed;
  }
  return head;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

const result = reverse(node1, 2);

module.exports = { reverse, Node };
