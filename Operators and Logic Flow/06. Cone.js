function calcVolNArea(radius, height) {
    let vol = (1 / 3) * Math.PI * Math.pow(radius, 2) * height
    let slant = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2))
    let lateral = Math.PI * radius * slant
    let base = Math.PI * Math.pow(radius, 2)
    let surfaceArea = lateral + base

    return console.log(`volume = ${vol}\r\narea = ${surfaceArea}`)
}
