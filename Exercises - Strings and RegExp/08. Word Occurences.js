function wordOccurences(str, subStr) {
    let regex = new RegExp('\\b' + subStr + '\\b','gi')
    let match = regex.exec(str)
    let counter = 0

    while (match){
        counter++
        match = regex.exec(str)
    }
    return counter
}

console.log(wordOccurences('The waterfall was so high, that the child couldn’t see its peak. therefore',
    'the'))