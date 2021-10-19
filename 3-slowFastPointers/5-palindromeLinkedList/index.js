// Palindrome LinkedList
// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

// a b c b a
// a b c c b a

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

// a b b a

// 1 -> 2 -> 3 -> 2 -> 1 -> null

// 1 -> 2 -> 3 -> 3 -> 2 -> 1 -> null

//          null
//           ^
// 1 -> 2 -> 3 -> 3 -> 2 -> 1 -> null

function findMiddle(head) {
  let slow = head,
    fast = head

  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

function reverse(head) {
  let prev = null,
    cur = head

  while (cur) {
    let nextNode = cur.next
    cur.next = prev
    // update cur & prev
    prev = cur
    cur = nextNode
  }
  return prev
}

function isPalindromic(head) {
  // find the middle node
  const middle = findMiddle(head)
  // reverse second half of LL (from middle node)
  const tail = reverse(middle)
  // check palindromicity by iterating from 2 ends
  let left = head,
    right = tail
  let result = true
  while (right !== middle) {
    if (left.val !== right.val) {
      result = false
      break
    }
    left = left.next
    right = right.next
  }
  // re-reverse second half of LL
  reverse(tail)
  // return result
  return result
}

module.exports = {isPalindromic, Node}
