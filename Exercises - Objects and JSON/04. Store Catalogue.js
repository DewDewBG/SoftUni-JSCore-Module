function storeCatalogue(input) {
    let catalogue = new Map()
    let sortedCataloge = {}
    let startLetters = new Set()

    for (let row of input) {
        let [product, price] = row.split(/\s*:\s*/g)

        catalogue.set(product, Number(price))
    }

    for (let kvp of [...catalogue].sort()) {
        startLetters.add(kvp[0][0])
        sortedCataloge[kvp[0]] = kvp[1]
    }

    for (let letter of startLetters) {
        console.log(letter)
        for (let product in sortedCataloge) {
            if (product[0] === letter) console.log(`  ${product}: ${sortedCataloge[product]}`)
        }
    }

}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])