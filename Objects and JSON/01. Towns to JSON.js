function townsToJSON(input) {
    let headers = input.shift().split(/\s*\|\s*/).filter(w => w !== '')
    let townsArr = []


    for (let str of input) {
        let obj = {}
        obj[headers[0]] = str.split(/\s*\|\s*/).filter(w => w !== '')[0]
        obj[headers[1]] = Number(str.split(/\s*\|\s*/).filter(w => w !== '')[1])
        obj[headers[2]] = Number(str.split(/\s*\|\s*/).filter(w => w !== '')[2])
        townsArr.push(obj)
    }

    console.log(JSON.stringify(townsArr))
}

townsToJSON(['| Town | Latitude | Longitude |',
             '| Sofia | 42.696552 | 23.32601 |',
             '| Beijing | 39.913818 | 116.363625 |'])