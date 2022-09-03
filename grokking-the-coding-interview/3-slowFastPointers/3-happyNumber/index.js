// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

// Input: 23

// 18 65 61 37 58 89 145 42 20 4 16 37 58 89 145 42 20 4
//                           s
//                                                   f

Number.prototype.next = function () {
  // number is this
  let num = this
  let nextNum = 0
  while (num > 0) {
    let digit = num % 10 // 123 % 10 = 3
    nextNum += digit * digit
    num = Math.floor(num / 10) // 123 / 10 = 12.3 ~ 12
  }
  return nextNum
}

function isHappyNumber(num) {
  let slow = num,
    fast = num

  while (fast.next() !== 1 && fast.next().next() !== 1) {
    // move pointers
    slow = slow.next()
    fast = fast.next().next()

    if (slow === fast) return false
  }

  return true
}

module.exports = {isHappyNumber}
