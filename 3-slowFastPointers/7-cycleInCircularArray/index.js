// [1, 2, -1, 2, 2]

function isCircular(arr) {
  Number.prototype.next = function (curDirection) {
    const curIdx = this

    const isForward = arr[curIdx] > 0

    if (isForward !== curDirection) return -1

    const nextIdx = (curIdx + arr[curIdx]) % arr.length

    return nextIdx
  }

  // start at each number
  for (let i = 0; i < arr.length; i++) {
    // is there cycle starting at i
    let slow = i,
      fast = i
    // 1. no changing at direction
    // 2. slow meets fast
    let isForward = arr[i] > 0

    while (true) {
      slow = slow.next(isForward)

      fast = fast.next(isForward)

      // changing direction ?
      if (fast === -1) break

      fast = fast.next(isForward)
      if (fast === -1) break

      if (slow === fast) return true
    }
  }

  return false
}

module.exports = {isCircular}
