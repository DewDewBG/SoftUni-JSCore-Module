function extractVariables(str) {
    let regex = /\b_{1}([A-Za-z0-9]+)\b/g
    let variables = []
    let match = regex.exec(str)

    while (match){
        variables.push(match[1])
        match = regex.exec(str)
    }

    return variables.join(',')
}

console.log(extractVariables('Calculate the _area of the _perfectRectangle object.'))