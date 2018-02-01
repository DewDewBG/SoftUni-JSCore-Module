function modifyAverage(num) {
    let arr = num.toString().split('').filter(d => !isNaN(d))
    let numArr = []

    for (let i = 0; i < arr.length; i++) {
        numArr[i] = Number(arr[i])
    }

    let over5Counter = 0
    let under5Counter = 0

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] >= 5) over5Counter++
        else under5Counter++
    }

    while (over5Counter <= under5Counter) {
        numArr.push(9)
        over5Counter++
    }

    console.log(numArr.join(''))
}



