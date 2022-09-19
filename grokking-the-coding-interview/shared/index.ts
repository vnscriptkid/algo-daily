export class ListNode<T> {
    value: T;
    next: null | ListNode<T>

    constructor(value: T, next: null | ListNode<T> = null) {
        this.value = value;
        this.next = next;
    }

    print() {
        const buffer: any[] = [];

        let cur: ListNode<T> | null = this;
        while (cur) {
            buffer.push(cur.value);
            cur = cur.next;
        }

        buffer.push('null')

        return buffer.join('->')
    }
}

export class TreeNode<T> {
    value: T;
    left: null | TreeNode<T>;
    right: null | TreeNode<T>;

    constructor(value: T, left: null | TreeNode<T> = null, right: null | TreeNode<T> = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export class Queue<T> extends Array {
    enqueue(item: T) {
        this.push(item)
    }

    dequeue(): T | undefined {
        return this.shift();
    }

    get size() {
        return this.length;
    }
}

export class Stack<T> extends Array {
    pushItem(item: T) {
        this.push(item)
    }

    popItem(): T | undefined {
        return this.pop();
    }

    get size() {
        return this.length;
    }
}