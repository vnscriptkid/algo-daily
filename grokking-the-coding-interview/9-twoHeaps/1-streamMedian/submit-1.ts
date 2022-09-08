import * as Heap from "collections/heap";

export class MedianOfStream {
    // 3 1 5 4
    //       ^

    // (1 3) | (4 5)

    smaller: Heap;
    larger: Heap;
    even: boolean;

    constructor() {
        this.smaller = new Heap([], null, (a, b) => a - b);// max heap
        this.larger = new Heap([], null, (a, b) => b - a); // min heap
        this.even = true;
    }

    insert(num: number) {
        if (this.even) {
            this.larger.add(num);
            this.smaller.add(this.larger.pop())
        } else {
            this.smaller.add(num);
            this.larger.add(this.smaller.pop())
        }
        this.even = !this.even;
    }

    findMedian(): number | null {
        if (this.smaller.length === 0) return null;

        if (this.even) {
            return (this.smaller.peek()! + this.larger.peek()!) / 2;
        }

        return this.smaller.peek()!;
    }
}