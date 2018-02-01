function aggregate(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum+= arr[i]
    console.log(sum)
    sum = 0
    for (let i = 0; i < arr.length; i++) sum += 1 / arr[i]
    console.log(sum)
    sum = ''
    for (let i = 0; i < arr.length; i++) sum += arr[i]
    console.log(sum)
}
