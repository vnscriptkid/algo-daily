function putFruitsIntoTwoBaskets(fruits) {
  const NUM_OF_BASKETS = 2;
  const baskets = {};
  let maximumNumFruits = -1;

  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    // put into basket
    let rightFruit = fruits[windowEnd];

    baskets[rightFruit] = rightFruit in baskets ? baskets[rightFruit] + 1 : 1;

    while (Object.keys(baskets).length > NUM_OF_BASKETS) {
      let leftFruit = fruits[windowStart];

      baskets[leftFruit] -= 1;

      if (baskets[leftFruit] === 0) delete baskets[leftFruit];

      windowStart++;
    }

    maximumNumFruits = Math.max(maximumNumFruits, windowEnd - windowStart + 1);
  }
  return maximumNumFruits;
}

module.exports = { putFruitsIntoTwoBaskets };
