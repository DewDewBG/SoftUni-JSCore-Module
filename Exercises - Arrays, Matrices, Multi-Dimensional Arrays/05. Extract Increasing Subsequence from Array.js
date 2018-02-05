function asd(input) {
    let currentBiggest = input[0]
    let arr = [input[0]]

    for (let i = 1; i < input.length; i++) {
        if (input[i] > currentBiggest) {
            arr.push(input[i])
            currentBiggest = input[i]
        }
    }

    return arr.join('\r\n')
}

console.log(asd([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));