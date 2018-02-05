function isMagic(matrix) {
    let previousSum = matrix[0].reduce((a, b) => a + b)
    let sum = 0

    for (let row = 0; row < matrix.length; row++) {
        sum = 0
        for (let col = 0; col < matrix[row].length; col++) {
            sum += matrix[row][col]
        }
        if (sum !== previousSum) return false
        previousSum = sum
    }

    return true
}

console.log(isMagic([[0, 0, 0],
                     [0, 0, 1],
                     [1, 0, 0]]));