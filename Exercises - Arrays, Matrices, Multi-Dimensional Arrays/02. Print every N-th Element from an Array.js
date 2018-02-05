function printElements(input) {
    let step = input.pop()

    for (let i = 0; i < input.length; i+= step) {
        console.log(input[i])
    }
}