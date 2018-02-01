function insideVolume(elements) {
    let x1 = 10, x2 = 50
    let y1 = 20, y2 = 80
    let z1 = 15, z2 = 50

    for (let i = 0; i < elements.length; i+=3) {
        x = elements[i]
        y = elements[i+1]
        z = elements[i+2]

        console.log(isInside(x, y, z))
    }
    
    function isInside(x, y, z) {
        if (x >= x1 && x <= x2){
            if (y >= y1 && y <= y2){
                if (z >= z1 && z <= z2){
                    return 'inside'
                }
            }
        }
        return 'outside'
    }
}
