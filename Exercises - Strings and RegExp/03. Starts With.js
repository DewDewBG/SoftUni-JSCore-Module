function startsWith(str, subStr) {
    if (str.substring(0, subStr.length) === subStr) return true
    return false
}

console.log(startsWith('How have you been?', 'how'))