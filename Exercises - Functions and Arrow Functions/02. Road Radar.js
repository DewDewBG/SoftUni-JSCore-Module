function isSpeeding(input) {
    let kmh = input[0]
    let roadtype = input[1]
    switch (roadtype) {
        case 'motorway' :
            if (kmh > 130 && kmh <= 150) console.log('speeding')
            if (kmh > 150 && kmh <= 170) console.log('excessive speeding')
            if (kmh > 170) console.log('reckless driving')
            break
        case 'interstate' :
            if (kmh > 90 && kmh <= 110) console.log('speeding')
            if (kmh > 110 && kmh <= 130) console.log('excessive speeding')
            if (kmh > 130) console.log('reckless driving')
            break
        case 'city' :
            if (kmh > 50 && kmh <= 70) console.log('speeding')
            if (kmh > 70 && kmh <= 90) console.log('excessive speeding')
            if (kmh > 90) console.log('reckless driving')
            break
        case 'residential' :
            if (kmh > 20 && kmh <= 40) console.log('speeding')
            if (kmh > 40 && kmh <= 60) console.log('excessive speeding')
            if (kmh > 60) console.log('reckless driving')
            break
    }
}
