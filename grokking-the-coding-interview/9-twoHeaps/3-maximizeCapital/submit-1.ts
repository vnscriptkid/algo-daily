const Heap = require('collections/heap');

class Item {
    constructor(
        public readonly idx: number,
        public readonly capital: number,
        public readonly profit: number
    ) { }
}

export function maximizeCapital(k: number, initialCapital: number, profits: number[], capitals: number[]) {
    const minHeapByCapital = new Heap([], null, (a: Item, b: Item) => b.capital - a.capital)
    const maxHeapByProfit = new Heap([], null, (a: Item, b: Item) => a.profit - b.profit)

    for (let [idx, cap] of capitals.entries()) {
        minHeapByCapital.add(new Item(idx, cap, profits[idx]))
    }

    let curCapital = initialCapital;
    let leftItems = k;

    while (leftItems > 0) {
        while (minHeapByCapital.length > 0 && minHeapByCapital.peek().capital <= curCapital) {
            maxHeapByProfit.add(minHeapByCapital.pop())
        }

        if (maxHeapByProfit.length === 0) {
            break;
        }

        const chosenProject = maxHeapByProfit.pop();
        curCapital += chosenProject.profit
        leftItems--;
    }

    return curCapital;
}