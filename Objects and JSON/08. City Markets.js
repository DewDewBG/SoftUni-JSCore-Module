function cityMarkets(input) {
    let towns = new Map()

    for (let str of input) {
        let [town, product, value] = str.split(/\s*->\s*/)
        value = value.split(/\s*:\s*/).map(a => Number(a)).reduce((a, b) => a * b)

        if (!towns.has(town)){
            towns.set(town, new Map())
        }
        if (!towns.get(town).has(product)){
            towns.get(town).set(product, 0)
        }
        let previousValue = towns.get(town).get(product)
        towns.get(town).set(product, previousValue += value)
    }

    for (let [town, products] of towns) {
        console.log(`Town - ${town}`)
        for (let [product, value] of products) {
            console.log(`$$$${product} : ${value}`)
        }
    }
}

cityMarkets(
['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'])