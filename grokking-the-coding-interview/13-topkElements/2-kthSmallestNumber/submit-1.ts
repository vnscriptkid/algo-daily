const Heap = require('collections/heap');

export function findKthSmallestNumber(nums: number[], k: number): number {
    // expect(findKthSmallestNumber([1, 5, 12, 2, 11, 5], 3)).toEqual(5)
    // [1, 5, 12, 2, 11, 5]
    //                   ^
    // maxHeap {1, 5, 2}

    const maxHeap = new Heap([], null, (a, b) => a - b);

    for (let [idx, num] of nums.entries()) {
        if (idx < k) {
            maxHeap.add(num);
            continue;
        }

        if (idx >= k && num < maxHeap.peek()) {
            maxHeap.pop();
            maxHeap.add(num)
        }
    }

    return maxHeap.peek();
}