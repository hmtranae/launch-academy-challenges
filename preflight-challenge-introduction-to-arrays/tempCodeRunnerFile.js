/*

# At the Bank

- Programmatically answer the questions below about 
  the provided array

*/

let bankLine = ["Sam", "Amy", "John", "Sally", "Susan"]

//Who is first in line?
console.log(bankLine[0])

//Who's third in line?
console.log(bankLine[2])

//Who's last in line?
console.log(bankLine[bankLine.length - 1])

//What index is Sally at?
console.log(bankLine.indexOf('Sally'))

//Bill has entered the bank. Add him to the end of the line
//What is the new length of the line?
let newLength = bankLine.push('Bill');
console.log(newLength)