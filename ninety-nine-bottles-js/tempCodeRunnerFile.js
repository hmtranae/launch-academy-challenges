// YOUR CODE HERE
// Your mission: Write a program that prints out the lyrics to that beloved classic "99 Bottles of Beer on the Wall". As an added twist, add an exclamation point to the sentence for every 10 bottles of beer.

let bottlesOfBeer = 99;

while (bottlesOfBeer >= 0) {
    if (bottlesOfBeer > 1) {
        console.log(`${bottlesOfBeer} bottles of beer on the wall, ${bottlesOfBeer} bottles of beer. \nTake one down and pass it around, ${bottlesOfBeer - 1} bottles of beer on the wall.
    `)
    } else if (bottlesOfBeer === 1) {
        console.log(`${bottlesOfBeer} bottle of beer on the wall, ${bottlesOfBeer} bottle of beer. \nTake one down and pass it around, no more bottles of beer on the wall.
        `)
    } else {
        console.log(`No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.
        `)
    }

    bottlesOfBeer--;
}