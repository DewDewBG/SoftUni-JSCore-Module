function capitalize(str) {
    return str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
}