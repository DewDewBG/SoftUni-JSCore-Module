function dayOfWeek(day) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    if (daysOfWeek.includes(day)) return daysOfWeek.indexOf(day) + 1

    return 'error'
}
