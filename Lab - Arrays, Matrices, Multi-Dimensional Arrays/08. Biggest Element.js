function biggestElement(input) {
    let marix = input.map(row=>row.split(' ').map(Number));

    let biggest = Number.NEGATIVE_INFINITY;

    marix.forEach(row=>row.forEach(c => biggest = Math.max(biggest, c)));

    console.log(biggest);
}
