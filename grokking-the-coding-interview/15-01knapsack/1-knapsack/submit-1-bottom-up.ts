export function knapsack(weights: number[], profits: number[], capacity: number) {
    // expect(knapsack([1, 2, 3, 5], [1, 6, 10, 16], 7)).toEqual(22)

    //         0  1  2  3  4  5  6  7
    // x(1,1)  0  1  1  1  1  1  1  1
    // y(2,6)  0  1  6  7  7  7  7  7 
    // z(3,10) 0  1  6  10 11 16 17 17
    // t(5,16) 0  1  6  10 11 16 17 22 

    const matrix = Array(weights.length).fill(null).map(_ => Array(capacity + 1).fill(0))

    // fill first row of matrix
    for (let cap = 1; cap <= capacity; cap++) {
        if (cap >= weights[0]) {
            // can pick this item
            matrix[0][cap] = profits[0];
        }
    }

    for (let row = 1; row < weights.length; row++) {
        for (let cap = 1; cap <= capacity; cap++) {
            // choice 1: skip item
            matrix[row][cap] = matrix[row - 1][cap];
            // choice 2: take item
            if (cap >= weights[row]) {
                matrix[row][cap] = Math.max(matrix[row][cap], profits[row] + matrix[row - 1][cap - weights[row]])
            }
        }
    }

    return matrix[weights.length - 1][capacity];
}