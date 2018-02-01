function cook(input) {
    let result = input[0]

    for (let i = 1; i < input.length; i++) {
        switch (input[i]){
            case 'chop' : result /= 2
                break
            case 'dice' : result = Math.sqrt(result)
                break
            case 'spice' : result++
                break
            case 'bake' : result *= 3
                break
            case 'fillet' : result *= 0.80
        }

        console.log(result)
    }
}
