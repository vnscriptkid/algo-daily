function findSquaresSum(num) {
  let digit = 0;
  let sum = 0;
  while (num > 0) {
    digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }

  return sum;
}

function isHappyNumber(num) {
  let slow = (fast = num);

  do {
    slow = findSquaresSum(slow);
    fast = findSquaresSum(findSquaresSum(fast));

    if (slow === 1 || fast === 1) return true;
  } while (slow !== fast);
  return false;
}

module.exports = { isHappyNumber };
