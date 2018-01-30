function isPrime(number) {
    let isPrime = true
    if (number <= 1) return false
    for (let i = 2; i < number; i++) {
        if (Number.isInteger(number / i)) isPrime = false
    }

    return isPrime
}

console.log(isPrime(1))