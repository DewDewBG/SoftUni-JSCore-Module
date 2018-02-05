function doubleOddsAndReverse(input) {
    let odds = input.filter((n, i) => i % 2 !== 0)
    for (let n in odds) {
        odds[n] *= 2
    }
    return odds.reverse().join(' ')
}

console.log(doubleOddsAndReverse([10, 15, 20, 25]))