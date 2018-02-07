function endsWith(str, subStr) {
    if (str.substring(str.length -  subStr.length) === subStr) return true
    return false
}

console.log(endsWith('This sentence ends with fun?', 'fun?'))