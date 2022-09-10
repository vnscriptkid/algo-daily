import * as Heap from 'collections/heap';

export function findKLargestNumbers(nums: number[], k: number): number[] {
    const minHeap = new Heap([], null, (a, b) => b - a);

    for (let num of nums) {
        minHeap.add(num);

        if (minHeap.length > k) {
            minHeap.pop();
        }
    }

    return minHeap.content.sort((a, b) => b - a);
}