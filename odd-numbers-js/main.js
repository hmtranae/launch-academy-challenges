// your code, here
// Write a program that prints out all of the odd numbers from 1 to 100, each on a new line.

let n = 1;
while (n < 100) {
    console.log(n);
    n += 2;
}

// OR

let n = 1;
while (n < 100) {
    if (n % 2) {
        console.log(n)
    }
    n++;
}