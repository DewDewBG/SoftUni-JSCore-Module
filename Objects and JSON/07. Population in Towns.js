function countPopulation(input) {
    input = input.join(' <-> ').split(' <-> ').filter(w => w !== '')
    let towns = {}

    for (let i = 0; i < input.length; i+= 2) {
        if (!towns.hasOwnProperty(input[i])){
            towns[input[i]] = 0
        }
        towns[input[i]] += Number(input[i + 1])
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`)
    }

}

countPopulation(['Sofia <-> 1200000',
                 'Montana <-> 20000',
                 'New York <-> 10000000',
                 'Washington <-> 2345000',
                 'Las Vegas <-> 1000000'])