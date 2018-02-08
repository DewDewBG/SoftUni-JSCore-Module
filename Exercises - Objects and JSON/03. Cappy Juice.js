function bottleJuice(input){
    let juice = {}
    let bottles = {}

    for (let row of input) {
        let [fruit, quantity] = row.split(/\s*=>\s*/g)

        if (!juice.hasOwnProperty(fruit)){
            juice[fruit] = 0
        }
        juice[fruit] += Number(quantity)

        while (juice[fruit] >= 1000){
            if (!bottles.hasOwnProperty(fruit)){
                bottles[fruit] = 0
            }
            bottles[fruit]++
            juice[fruit]-= 1000
        }
    }

    for (let kvp in bottles) {
        console.log(`${kvp} => ${bottles[kvp]}`)
    }
}

bottleJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
])