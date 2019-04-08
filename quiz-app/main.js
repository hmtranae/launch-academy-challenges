// your code, here
let Rami = 88
let Natoya = 92
let Max = 68
let Lynn = 100
let Sasha = 82
let Mohammed = 98
let Jennifer = 94
let Denise = 92

let teamOneScores = [88, 92, 68, 100]
let teamTwoScores = [82, 98, 94, 92]

let avgTeamOne = teamOneScores.reduce((acc, curr) => acc + curr) / teamOneScores.length
let avgTeamTwo = teamTwoScores.reduce((acc, curr) => acc + curr) / teamTwoScores.length

let avgTogether = [...teamOneScores, ...teamTwoScores].reduce((acc, curr) => acc + curr) / (teamOneScores.length + teamTwoScores.length)

let averages = [avgTeamOne.toFixed(0), avgTeamTwo.toFixed(0), avgTogether.toFixed(0)]

let numGreaterThan70 = [...teamOneScores, ...teamTwoScores].filter(score => score >= 70).length;

console.log(`Average for Team One: ${avgTeamOne} \n
Rounded Average for Team One: ${averages[0]} \n
Average for Team Two: ${avgTeamTwo} \n
Rounded Average for Team Two: ${averages[1]} \n
Average for Both Teams: ${avgTogether} \n
Rounded Average for Both Teams: ${averages[2]} \n
Number of Students Passing: ${numGreaterThan70}
`)