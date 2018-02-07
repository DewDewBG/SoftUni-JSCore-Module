function generateBill(input) {
    let cost = []
    let products = []
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) products.push(input[i])
        else cost.push(input[i])
    }
    cost = cost.map(n => Number(n)).reduce((a, b) => a + b)
    products = products.join(', ')
    console.log(`You purchased ${products} for a total sum of ${cost}`)
}