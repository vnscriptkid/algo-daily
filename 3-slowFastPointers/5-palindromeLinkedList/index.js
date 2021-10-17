// Palindrome LinkedList
// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

// 1 -> 2 -> 3 -> 2 -> 1 -> null
// 1 -> 2 -> 3 <- 2 <- 1

// 1 -> 2 -> 3 -> 3 -> 2 -> 1 -> null
// 1 -> 2 -> 3 <- 3 <- 2 <- 1

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
  let prev = null
  let cur = head
  while (cur) {
    let curNext = cur.next
    cur.next = prev
    // before next round
    prev = cur
    cur = curNext
  }
  return prev
}

function isPalindromic(head) {
  // find middle
  let middle = findMiddle(head)
  // reverse from middle
  let lastNode = reverse(middle)
  // check if it's palindromic
  let left = head,
    right = lastNode
  let result = true
  while (right !== middle) {
    if (left.val !== right.val) {
      result = false
      break
    }
    left = left.next
    right = right.next
  }
  // re-reverse
  reverse(lastNode)

  // return
  return result
}

module.exports = {isPalindromic, Node}
