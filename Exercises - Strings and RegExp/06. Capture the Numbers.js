function extractNums(input) {
    return input.join('').split(/\D+/).join(' ')
}

console.log(extractNums(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45]']));