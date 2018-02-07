function aggregateTable(input) {
    input = input.join(' ')
    let regex = /\s*[0-9'\[\].,|;\n\t-]+\s*/g
    let towns = input.split(regex).filter(w => w !== '')
    regex = /\s*[A-Za-z'\[\].,|;\n\t-]+\s*/
    let numbers = input.split(regex).filter(d => d !== '')
    let sum = numbers.map(n => Number(n)).reduce((a, b) => a + b)

    console.log(towns.join(', '))
    console.log(sum)
}

aggregateTable(['| Sofia | 300',
'| Veliko Tarnovo | 500',
'| Yambol | 275'])