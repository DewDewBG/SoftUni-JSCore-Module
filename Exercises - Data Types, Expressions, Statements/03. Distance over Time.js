function calcDistance(arr) {
    let v1 = arr[0]
    let v2 = arr[1]
    let time = arr[2]
    let timeInHours = time / 60 / 60
    let v1DistTraveledInMeters = timeInHours * v1 * 1000
    let v2DistTraveledInMeters = timeInHours * v2 * 1000

    console.log(Math.abs(v1DistTraveledInMeters - v2DistTraveledInMeters))
}
