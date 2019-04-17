// your code, here
let perimeter = (length, width) => {
    if (width === 0 && length === 0) {
        return `Both values can't be 0!`
    } else if (length === 0 || width === 0) {
        return 1
    } else {
        return 2 * (length + width);
    }
}

perimeter(0, 1);

module.exports = perimeter
