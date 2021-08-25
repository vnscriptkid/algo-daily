function isCircular(arr) {
  for (let i = 0; i < arr.length; i++) {
    let slow = (fast = i);
    let isForward = arr[i] >= 0; // remember direction

    do {
      slow = findNextIndex(arr, slow, isForward);
      fast = findNextIndex(arr, fast, isForward);

      if (fast === -1) {
        fast = findNextIndex(arr, fast, isForward);
      }
    } while (fast !== -1 && slow !== -1 && slow !== fast);

    if (slow === fast && slow !== -1) return true;
  }
  return false;
}

function findNextIndex(arr, curIndex, isForward) {
  let nextIndex = (curIndex + arr[curIndex]) % arr.length;

  if (nextIndex < 0) nextIndex += arr.length;

  if (nextIndex === curIndex) return -1;

  let direction = arr[nextIndex] >= 0;

  if (direction !== isForward) return -1;

  return nextIndex;
}

module.exports = { isCircular };
