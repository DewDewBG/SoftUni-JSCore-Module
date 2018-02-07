function extractDomains(input) {
    let regex = /(www)\.([A-Za-z0-9-]+)(\.[a-z]+){1,}/g

    for (let sentence of input) {
        let match = regex.exec(sentence)

        while (match){
            console.log(match[0])
            match = regex.exec(sentence)
        }
    }

}
