import * as Heap from 'collections/heap';

class Node {
    constructor(
        public listIdx: number,
        public numIdx: number,
        public val: number
    ) { }
}

export function merge(arr: number[][]): number[] {
    // L1 = [2, 6, 8], 
    // L2 = [3, 6, 7], 
    // L3 = [1, 3, 4];

    const minHeap = new Heap([], null, (a: Node, b: Node) => b.val - a.val);

    const result: number[] = [];

    for (const [listIdx, list] of arr.entries()) {
        minHeap.add(new Node(listIdx, 0, list[0]));
    }

    while (minHeap.length > 0) {
        const nodeOut: Node = minHeap.pop();

        result.push(nodeOut.val);

        const curList = arr[nodeOut.listIdx];

        if (nodeOut.numIdx + 1 < curList.length) {
            minHeap.add(new Node(nodeOut.listIdx, nodeOut.numIdx + 1, curList[nodeOut.numIdx + 1]))
        }
    }

    return result;
}