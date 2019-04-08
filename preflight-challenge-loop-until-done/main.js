/*

# Bank Balance - Can I buy it?

We want to write a program that tells us if we have 
enough money in our account to buy something.

Using the code we wrote yesterday, improve your program.

It should:

- prompt the user for their initial balance
- prompt them to ask how much their intended purchase is
- if the user has enough money in their account, 
  let them know they can buy it and 
  remove the funds from their balance
- if the user does not have enough money,
  let them know they can't buy it and 
  ask them if they would like to purchase something else
- the program should should terminate when the user enters
  "done"
*/

function outputBalance(balance, purchaseAmount) {
    console.log('You have enough money to make this purchase. Here we go!!!');
    console.log(`You had ${balance} in your account. Your purchase was ${purchaseAmount}`)
    balance -= purchaseAmount;
    console.log(`Purchase successful. You have ${balance} in your account now`)
}

let balance = (+prompt('What is your initial balance?')).toFixed(2);
let purchaseAmount = (+prompt('What is your intended purchase amount?')).toFixed(2);

if (balance >= purchaseAmount) {
    outputBalance(balance, purchaseAmount);
}

while (balance < purchaseAmount) {
    purchaseAmount = prompt("You don't have enough money in your account. Type 'done' if you don't want to make a purchase or type another item amount.");

    if (purchaseAmount === 'done') {
        console.log('Okay, bye now.')
    } else if (balance >= purchaseAmount) {
        outputBalance(balance, purchaseAmount);
    }
}

