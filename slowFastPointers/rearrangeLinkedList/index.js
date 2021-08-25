class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }

  print() {
    let cur = this
    let output = ""
    while (cur) {
      output += cur.val + "->"
      cur = cur.next
    }
    output += "NULL"
    console.log(output)
  }
}

function findMiddlePoint(head) {
  let slow = (fast = head)

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

function reverse(head) {
  let cur = head
  let left = null

  while (cur) {
    let temp = cur.next
    cur.next = left

    // loop
    left = cur
    cur = temp
  }

  return left
}

function rearrange(head) {
  // go to middle
  const middle = findMiddlePoint(head)

  // reverse the right half
  let right = reverse(middle)
  let left = head

  // rearrange ll
  while (right && left) {
    let temp = left.next
    left.next = right
    left = temp

    temp = right.next
    right.next = left
    right = temp
  }

  if (left) {
    left.next = null
  }

  return head
}

module.exports = {Node, rearrange}
