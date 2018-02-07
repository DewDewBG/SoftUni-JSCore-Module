function hideSecretData(input) {
    let nameRegex = /\*[A-Z]{1}[a-zA-Z]*(?= |\t|$)/g;
    let phoneRegex = /\+[0-9\-]{10}(?=\t| |$)/g;
    let idRegex = /![a-zA-Z0-9]+(?=\t| |$)/g;
    let baseRegex = /_[a-zA-Z0-9]+(?=\t| |$)/g;

    for(let sentence of input) {
        sentence = sentence.replace(nameRegex, match => "|".repeat(match.length));
        sentence = sentence.replace(phoneRegex, match => "|".repeat(match.length));
        sentence = sentence.replace(idRegex, match => "|".repeat(match.length));
        sentence = sentence.replace(baseRegex, match => "|".repeat(match.length));

        console.log(sentence);
    }
}
