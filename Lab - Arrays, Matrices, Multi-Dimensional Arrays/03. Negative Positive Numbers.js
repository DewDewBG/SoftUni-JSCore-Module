function sortNegativesAndPositives(input) {
    let orderedNums = []

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 0) orderedNums.push(input[i])
        else orderedNums.unshift(input[i])
    }

    return orderedNums
}