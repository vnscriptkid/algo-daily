const Heap = require('collections/heap')

function calDistance(point) {
  const [a, b] = point
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}

function findClosestPointsToOrigin(points, k) {
  const maxHeap = new Heap([], null, (a, b) => calDistance(a) - calDistance(b))

  // add first k points to the heap
  for (let i = 0; i < k; i++) {
    maxHeap.push(points[i])
  }

  // from k-th point, is it nearer to origin, comparing to farthest one in heap
  for (let i = k; i < points.length; i++) {
    if (calDistance(points[i]) < calDistance(maxHeap.peek())) {
      maxHeap.pop()
      maxHeap.add(points[i])
    }
  }

  return Array.from(maxHeap)
}

module.exports = {findClosestPointsToOrigin}
