function fruitOrVege(food) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach']
    let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley']

    if (fruits.includes(food)){
        return console.log('fruit')
    }
    if (vegetables.includes(food)){
        return console.log('vegetable')
    }
    return console.log('unknown')
}
