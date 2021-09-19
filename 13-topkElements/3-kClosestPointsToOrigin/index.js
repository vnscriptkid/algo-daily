// Given an array of points in the a 2D plane, find ‘K’ closest points to the origin. (0, 0)

// Input: point = [[1, 3], [3, 4], [2, -1]], K = 2
//                 sqrt(10), sqrt(25), sqrt(5)

// [1, 3] and [0, 0]
// sqrt( (1 - 0)^2 + (3 - 0)^2 )
// sqrt ( 10 )

// Output: [[1, 3], [2, -1]]

const Heap = require('collections/heap')

function distanceToOrigin(point) {
  return Math.sqrt(point[0] * point[0] + point[1] * point[1])
}

function findClosestPointsToOrigin(points, k) {
  const maxHeap = new Heap(
    [],
    null,
    (a, b) => distanceToOrigin(a) - distanceToOrigin(b),
  )

  // 1st loop: push k points to the max heap
  for (let i = 0; i < k; i++) {
    maxHeap.add(points[i])
  }

  // 2nd loop: selectively swap point with peek of heap
  for (let i = k; i < points.length; i++) {
    if (distanceToOrigin(points[i]) < distanceToOrigin(maxHeap.peek())) {
      maxHeap.pop()
      maxHeap.add(points[i])
    }
  }

  return maxHeap.content
}

module.exports = {findClosestPointsToOrigin}
