function searchTriplets(arr, target, start, firstNum, quadruplets) {
  for (let i = start; i < arr.length; i++) {
    const secondNum = arr[i];
    const targetOfTwo = target - firstNum - secondNum;
    let left = i + 1,
      right = arr.length - 1;

    while (left < right) {
      const curSum = arr[left] + arr[right];
      if (curSum === targetOfTwo) {
        quadruplets.push([firstNum, secondNum, arr[left], arr[right]]);
        left++;
        right--;

        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }

        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (curSum < targetOfTwo) left++;
      else right--;
    }
  }
}

function searchQuadruplets(arr, target) {
  const quadruplets = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const firstNum = arr[i];
    searchTriplets(arr, target, i + 1, firstNum, quadruplets);
  }

  return quadruplets;
}

module.exports = { searchQuadruplets };
