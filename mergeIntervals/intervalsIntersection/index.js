function findIntersections(list1, list2) {
  let i = 0,
    j = 0;
  const intersections = [];

  while (i < list1.length && j < list2.length) {
    let [start1, end1] = list1[i];
    let [start2, end2] = list2[j];

    const noOverlap = start1 > end2 || start2 > end1;

    if (!noOverlap) {
      // has overlap
      intersections.push([Math.max(start1, start2), Math.min(end1, end2)]);
    }

    // which one ended first
    if (end1 < end2) i++;
    else j++;
  }

  return intersections;
}

const arr1 = [
    [1, 3],
    [5, 6],
    [7, 9],
  ],
  arr2 = [
    [2, 3],
    [5, 7],
  ];
const result = findIntersections(arr1, arr2);

module.exports = { findIntersections };
