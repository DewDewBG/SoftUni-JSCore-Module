function carsProduced(input) {
    let carList = new Map()

    for (let row of input) {
        let [brand, model, quantity] = row.split(/\s*\|\s*/g)

        if (!carList.has(brand)){
            carList.set(brand, new Map())
        }
        if (!carList.get(brand).has(model)){
            carList.get(brand).set(model, 0)
        }
        let previousQuantity = Number(carList.get(brand).get(model))
        carList.get(brand).set(model, previousQuantity += Number(quantity))
    }

    for (let [brand, model] of carList) {
        console.log(brand)
        for (let car of model) {
            console.log(`###${car[0]} -> ${car[1]}`)
        }

    }
}

carsProduced([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'BMW | X6 | 50',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])