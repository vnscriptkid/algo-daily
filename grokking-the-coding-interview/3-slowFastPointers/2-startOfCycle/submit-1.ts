export function isHappyNumber(num: number) {
    let slow = num, fast: number | null = num;
    while (true) {
        slow = findNext(slow)!;

        fast = findNext(fast);
        fast = findNext(fast);

        if (fast === null) {
            return true;
        }

        if (slow === fast) {
            // detect cycle
            return false;
        }
    }

    throw new Error('unreachable code');
}

function findNext(num: number | null): number | null {
    if (num === null) {
        return null;
    }

    const digits = findDigits(num)

    const nextNum = digits.reduce((acc, cur) => acc + cur * cur, 0);

    return nextNum === 1 ? null : nextNum;
}

function findDigits(num: number): number[] {
    const digits: number[] = [];

    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }

    return digits;
}

isHappyNumber(12)

