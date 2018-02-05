function firstAndLast(input) {
    let k = input[0]

    let first = input.slice(1, k + 1)
    let last = input.slice(input.length - k)

    console.log(first)
    console.log(last)
}