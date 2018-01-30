function colorNums(n) {
    let result = '<ul>\r\n'

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            result += `<li><span style='color:blue'>${i}</span></li>\r\n`
        } else {
            result += `<li><span style='color:green'>${i}</span></li>\r\n`
        }
    }
    result += `</ul>`

    return result
}

console.log(colorNums(10))