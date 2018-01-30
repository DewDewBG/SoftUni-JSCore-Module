function isLeap(year) {
    if (Number(year) % 400 === 0 || Number(year) % 4 === 0 && Number(year) % 100 !== 0){
        return console.log('yes')
    }
    return console.log('no')
}

isLeap(2016)