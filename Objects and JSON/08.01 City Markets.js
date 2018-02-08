function cityMarkets(input) {
    let towns = {}

    for (let str of input) {
        let [town, product, value] = str.split(/\s*->\s*/)
        value = value.split(/\s*:\s*/).map(a => Number(a)).reduce((a, b) => a * b)

        if (!towns.hasOwnProperty(town)){
            towns[town] = {[product]: value}
        } else {
            towns[town][product] = value
        }

    }

    for (let town in towns) {
        console.log('Town - ' + town)
        for (let key in towns[town]) {
            console.log(`$$$${key} : ${towns[town][key]}`)
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