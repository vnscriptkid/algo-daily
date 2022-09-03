// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

// Output: [2.2, 2.8, 2.4, 3.6, 2.8]

export function solution(arr: number[], k: number) {
  // [1, 3, 2, 6, -1, 4, 1, 8, 2]
  //              ^            $
  // curWindow: 14

  // [11, 14, 12, 18, 14]
  let left = 0

  let windowSum = 0

  const avg: number[] = []

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right]

    if (windowSize(left, right) > k) {
      // shrink window by one from the left
      windowSum -= arr[left]
      left++
    }

    if (windowSize(left, right) === k) {
      // now windowSize is k
      avg.push(windowSum / k)
    }
  }

  return avg.map(x => formatNum(x))
}

function formatNum(x: number) {
  return Number(x.toFixed(1))
}

function windowSize(left: number, right: number) {
  return right - left + 1
}
