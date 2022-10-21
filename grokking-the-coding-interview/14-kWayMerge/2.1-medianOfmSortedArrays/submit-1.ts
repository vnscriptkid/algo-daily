const Heap = require('collections/heap');

class Item {
    constructor(
        public readonly listIdx: number,
        public readonly numIdx: number,
        public readonly value: number,
    ) { }
}

export function findMedian(sortedLists: number[][]) {
    const n = sortedLists.reduce((acc, list) => acc + list.length, 0);

    // 1 2 3 4 5 6 => 7 / 2 => 4

    // 1 2 3 4 5 => (5 +1) / 2 => 3

    let middle = Math.ceil((n + 1) / 2);

    const minHeap = new Heap([], null, (a: Item, b: Item) => b.value - a.value)

    for (let [listIdx, list] of sortedLists.entries()) {
        minHeap.add(new Item(listIdx, 0, list[0]));
    }

    const globalMin: number[] = [];
    while (minHeap.length && globalMin.length < middle) {
        const itemOut = minHeap.pop() as Item;

        globalMin.push(itemOut.value);

        const { listIdx, numIdx } = itemOut;
        const curList = sortedLists[listIdx];

        if (numIdx + 1 < curList.length) {
            minHeap.add(new Item(listIdx, numIdx + 1, curList[numIdx + 1]));
        }
    }

    if (globalMin.length !== middle) return null;


    return n % 2 === 0 ?
        (globalMin[middle - 1] + globalMin[middle - 2]) / 2
        :
        globalMin[middle - 1];
}