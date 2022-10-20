const Heap = require('collections/heap');

const distanceToOrigin = (point: number[]) => Math.sqrt(point[0] * point[0] + point[1] * point[1])

export function findClosetPoints(points: number[][], k: number) {
    const maxHeap = new Heap([], null, (x, y) => distanceToOrigin(x) - distanceToOrigin(y))

    for (let point of points) {
        maxHeap.add(point)

        if (maxHeap.length > k) {
            maxHeap.pop();
        }
    }

    return maxHeap.content;
}