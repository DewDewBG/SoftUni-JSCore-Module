function diagonalSums(input) {
    let matrix = [];
    for (let r = 0; r < input.length; r++) {
        let line = input[r].split(' ').map(Number);
        matrix.push(line);
    }

    let leftUp = matrix[matrix.length - 1][0]; 
    let leftDown = matrix[0][0];

    for (let row = 0; row < matrix.length - 1; row++) {
        leftDown += matrix[row + 1][row + 1];
        leftUp += matrix[matrix.length - 1 - 1 - row][row + 1];
    }
    console.log(leftDown + " " + leftUp);
}