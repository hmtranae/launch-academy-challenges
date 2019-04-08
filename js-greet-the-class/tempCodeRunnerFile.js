// test
// let numStudents = prompt('How many students are coming to class today?')

function greetClass(numStudents) {
    if (typeof numStudents !== 'number') {
        console.log('You did not enter a valid value')
        greetClass();
    } else if (numStudents === 1) {
        console.log('Welcome, student! Get yourself ready to learn some JavaScript!')
    } else if (numStudents >= 2 && numStudents <= 9) {
        console.log('Welcome students! Get yourselves ready to learn some JavaScript!')
    } else {
        console.log('Welcome students! Please settle in two to a table, and prepare to learn some JavaScript!')
    }

    for (let i = 1; i <= numStudents; i++) {
        console.log(`Hello student #${i}`)
    }
}

greetClass('dsadsa')