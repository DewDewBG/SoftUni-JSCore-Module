function countWords(str) {
    let wordsArr = str.join('').split(/[^\w]+/g).filter(w => w !== '')
    let words = {}

    for (let word of wordsArr) {
        if (!words.hasOwnProperty(word)){
            words[word] = 0
        }
        words[word] ++
    }

    console.log(JSON.stringify(words))
}

countWords([ 'Far too slow, you\'re far too slow.' ])
