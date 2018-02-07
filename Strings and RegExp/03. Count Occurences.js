function countOccurences(key, str) {
    if (!str.includes(key)) return 0
    str += "";
    key += "";
    if (key.length <= 0) return (str.length + 1);

    let n = 0,
        pos = 0,
        step = key.length;

    while (true) {
        pos = str.indexOf(key, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}