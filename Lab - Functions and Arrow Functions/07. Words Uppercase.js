function extractWords(str) {
    str = str.toUpperCase()
        .split(/\W+/)
        .filter(w => w !== '')
        .join(', ')

    console.log(str)
}

extractWords('Hi, how are you?');
