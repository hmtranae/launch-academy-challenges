// test
let isValid = false;

while (!isValid) {

    let numStudents = prompt('How many students are coming to class today?')
    let numStudentsInt = parseInt(numStudents);

    if (numStudentsInt || numStudents === null) {
        isValid = true;
    }

    if (typeof numStudentsInt !== 'number') {
        alert('You did not enter a valid value')
    } else if (numStudentsInt === 1) {
        console.log('Welcome, student! Get yourself ready to learn some JavaScript!')
    } else if (numStudentsInt >= 2 && numStudentsInt <= 9) {
        console.log('Welcome students! Get yourselves ready to learn some JavaScript!')
    } else if (numStudentsInt > 9) {
        console.log('Welcome students! Please settle in two to a table, and prepare to learn some JavaScript!')
    }

    for (let i = 1; i <= numStudentsInt; i++) {
        console.log(`Hello student #${i}`)
    }
}