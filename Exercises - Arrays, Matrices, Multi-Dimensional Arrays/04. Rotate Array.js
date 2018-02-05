function rotateArr(input) {
    let n = input.pop()

    for (let i = 0; i < n; i++) {
        input.unshift(input.pop())
    }

    return input.join(' ')
}
