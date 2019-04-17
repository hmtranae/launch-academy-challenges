// your code, here
let perimeter = (length, width) => {
    let args = [...arguments]
    console.log(args)
    if (width === 0 && length === 0) {
        return `Both values can't be 0!`
    } else if (args.includes(0)) {
        return 1
    }
}

perimeter(0, 1);