function smallestTwo(input) {
    let array = input.sort((a, b)=>a - b)
        .slice(0, 2)
        .join(' ');
    console.log(array);
}