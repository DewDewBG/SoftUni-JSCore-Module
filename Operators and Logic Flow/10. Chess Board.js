function chessBoard(n) {
    let result = '<div class="chessboard">\r\n'
    let color = ''

    for (let i = 0; i < n; i++) {
        result += '  <div>\r\n'
        if (i % 2 === 0){
            for (let j = 1; j <= n; j++) {
                if (j % 2 === 0) color = 'white'
                else color = 'black'
                result += `    <span class="${color}"></span>\r\n`
            }
        } else {
            for (let j = 1; j <= n; j++) {
                if (j % 2 !== 0) color = 'white'
                else color = 'black'
                result += `    <span class="${color}"></span>\r\n`
            }
        }


        result += ' </div>\r\n'
    }
    result += '</div>\r\n'

    return result
}

console.log(chessBoard(3))