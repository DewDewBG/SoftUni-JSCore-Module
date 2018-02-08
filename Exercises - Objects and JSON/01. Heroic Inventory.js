function heroicInventory(input) {
    let heroes = []

    for (let row of input) {
        let [name, level, items] = row.split(/\s*\/\s*/g)

        let hero = {
            name: name,
            level: Number(level),
            items: items.split(', ')
        }

        heroes.push(hero)
    }

    console.log(JSON.stringify(heroes))
}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSwor',
    'Hes / 1 / Desolator, Sentinel, Antara'
])