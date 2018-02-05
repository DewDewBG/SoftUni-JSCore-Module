function addRemove(input) {
    let arr = []

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') arr.push(i + 1)
        else arr.pop()
    }
    if (arr.length > 0) return arr.join('\r\n')
    else return 'Empty'
}

console.log(addRemove(['add', 'add', 'add', 'add']))