function findLowestPrice(input) {

    let lowestPrices = new Map()

    for (let str of input) {
        let [town, product, price] = str.split(/\s*\|\s*/g)

        if (!lowestPrices.has(town)){
            lowestPrices.set(town, new Map())
        } else {
            lowestPrices.get(town).set(product, price)
        }
    }



}

findLowestPrice([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])