const Heap = require('collections/heap');

class Node {
    constructor(
        public listIdx: number,
        public numIdx: number,
        public value: number
    ) { }
}

export function findKthSmallest(lists: number[][], k: number): number {
    const minHeap = new Heap([], null, (a: Node, b: Node) => b.value - a.value);

    // init heap
    for (let [listIdx, list] of lists.entries()) {
        minHeap.add(new Node(listIdx, 0, list[0]));
    }

    let merged: number[] = [];

    while (minHeap.length && merged.length < k) {
        const nodeOut: Node = minHeap.pop();

        merged.push(nodeOut.value);

        const curList = lists[nodeOut.listIdx];

        if (nodeOut.numIdx + 1 < curList.length) {
            minHeap.add(new Node(nodeOut.listIdx, nodeOut.numIdx + 1, curList[nodeOut.numIdx + 1]))
        }

    }

    return merged.length === k ? merged[k - 1] : -1;
}