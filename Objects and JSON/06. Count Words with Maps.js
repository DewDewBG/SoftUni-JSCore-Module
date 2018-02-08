function countWordsWithMap(str) {
    str = str.join('').toLowerCase().split(/[^\w]+/g).filter(w => w !== '')
    let words = new Map()

    for (let word of str) {
        if (!words.has(word)){
            words.set(word, 0)
        }
        words.set(word, words.get(word) + 1)
    }

    words = Array.from(words).sort()

    for (let kvp of words) {
        console.log(`'${kvp[0]}' -> ${kvp[1]} times`)
    }

}

countWordsWithMap([ 'The man was walking the dog down the road when it suddenly started barking against the other dog. Surprised he pulled him away from it.' ])