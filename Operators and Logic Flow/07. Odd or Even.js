function oddOrEven(n) {
    if (n % 1 !== 0){
        return console.log('invalid')
    }
    if (n % 2 === 0){
        return console.log('even')
    }
    return console.log('odd')
}