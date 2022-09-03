// Rearrange a LinkedList

// Given the head of a Singly LinkedList,
// write a method to modify the LinkedList
// such that the nodes from the second half of the LinkedList are inserted alternately
// to the nodes from the first half in reverse order.
// So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null,
// your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

// 1 -> 2 -> 3 -> 4 -> null
//                $
// 6 -> 5 -> 4 -> null
//                 ^

// 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> 4

// even
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
//               p1            p2

// odd
// 1 -> 2 -> 3 -> 4 -> 5 -> null
//                m

// 1 -> 2 -> 3 -> 4 -> null
//           ^
// 5 -> 4 -> null
//           $

// 1 -> 5 -> 2 -> 4 -> 3

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }

  print() {
    let cur = this
    let output = ''
    while (cur) {
      output += cur.val + '->'
      cur = cur.next
    }
    output += 'NULL'
    console.log(output)
  }
}

function findMiddle(head) {
  let slow = head,
    fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

function reverse(head) {
  let cur = head
  let prev = null

  while (cur) {
    let nextOfCur = cur.next
    cur.next = prev
    // update cur, prev
    prev = cur
    cur = nextOfCur
  }

  return prev
}

function rearrange(head) {
  // find the middle node
  const middle = findMiddle(head)
  // reverse second half
  const head2 = reverse(middle)
  // combine them together
  let p1 = head,
    p2 = head2

  while (p1 && p2) {
    let nextOfP1 = p1.next
    let nextOfP2 = p2.next

    p1.next = p2
    p2.next = nextOfP1

    // update p1 and p2
    p1 = nextOfP1
    p2 = nextOfP2
  }

  if (p1) p1.next = null

  return head
}

module.exports = {rearrange, Node}
