//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
//UNFINISHED
function sortDatabase(input) {
    let database = {}

    for (let row of input) {
        let [system, component, subComponent] = row.split(/\s*->\s*/)

        if (!database.hasOwnProperty(system)){
            database[system] = {[component]: subComponent}
        } else {
            database[system][component] = subComponent
        }
    }
    console.log(database)
}

sortDatabase([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])