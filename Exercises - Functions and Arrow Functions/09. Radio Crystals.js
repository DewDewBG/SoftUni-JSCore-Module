function radioCrystals(input) {
    let targetThickness = input[0]
    let counter = 0
    let cutPerformed = false
    let lapPerformed = false
    let grindPerformed = false
    let etchPerformed = false
    let xrayPerformed = false

    for (let i = 1; i < input.length; i++) {
        let currentChunk = input[i]
        console.log(`Processing chunk ${currentChunk} microns`)

        while (cut(currentChunk) >= targetThickness){
            currentChunk = cut(currentChunk)
            counter ++
            cutPerformed = true
        }
        if (cutPerformed){
            console.log('Cut x' + counter)
            console.log('Transporting and washing')
            transportAndWash(currentChunk)
            counter = 0
        }

        while (lap(currentChunk) >= targetThickness && lap(currentChunk) <= grind(currentChunk)){
            currentChunk = lap(currentChunk)
            counter++
            lapPerformed = true
        }
        if (lapPerformed){
            console.log('Lap x' + counter)
            console.log('Transporting and washing')
            transportAndWash(currentChunk)
            counter = 0
        }

        while (grind(currentChunk) >= targetThickness){
            currentChunk = grind(currentChunk)
            counter++
            grindPerformed = true
        }
        if (grindPerformed){
            console.log('Grind x' + counter)
            console.log('Transporting and washing')
            transportAndWash(currentChunk)
            counter = 0
        }

        while (etch(currentChunk) >= targetThickness || etch(currentChunk) === targetThickness - 1){
            currentChunk = etch(currentChunk)
            counter++
            etchPerformed = true
        }
        if (etchPerformed){
            console.log('Etch x' + counter)
            console.log('Transporting and washing')
            transportAndWash(currentChunk)
            counter = 0
        }

        if (currentChunk === targetThickness - 1){
            currentChunk = xray(currentChunk)
            console.log('X-ray x1')
        }

        console.log(`Finished crystal ${targetThickness} microns`)

    }

    function cut(chunk) {
        return chunk / 4
    }
    
    function lap(chunk) {
        return chunk * 0.8
    }

    function grind(chunk) {
        return chunk  - 20
    }
    
    function etch(chunk) {
        return chunk - 2
    }
    
    function xray(chunk) {
        return chunk + 1

    }

    function transportAndWash(chunk) {
        return Math.floor(chunk)
    }
}

radioCrystals([1000, 4000, 8100])
