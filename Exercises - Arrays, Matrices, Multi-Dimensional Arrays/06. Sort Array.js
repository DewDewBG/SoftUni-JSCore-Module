function sortArr(input) {
   return input.sort().sort((a, b) => a.length > b.length).join('\r\n')
}

console.log(sortArr(['alpha', 'beta', 'gamma']));