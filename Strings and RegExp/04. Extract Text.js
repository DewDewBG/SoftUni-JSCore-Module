function extractText(str) {
    let currentText = ''
    let wordsExtracted = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '('){
            for (let j = i + 1; j < str.length; j++) {
                if (str[j] === ')') {
                    wordsExtracted.push(currentText)
                    currentText = ''
                    break
                }
                currentText += str[j]
            }
        }
    }
    console.log(wordsExtracted.join(', '))
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')