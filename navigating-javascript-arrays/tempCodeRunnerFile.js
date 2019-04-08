let supplies = ["space helmet", "canister of oxygen", "water recycler", "big red button", "freeze dried ice cream", "tang drink mix"]

// 1.)  Using a `forEach` loop, write a function called `supplyCheck` that takes in an array of supplies as an argument, and logs each item to your console. It should match the message of "SUPPLY ITEM is logged and accounted for."

// Your code here....
function supplyCheck(supplies) {
    supplies.forEach(item => {
        console.log(`${item} is logged and accounted for.`)
    });
}

console.log(supplyCheck(supplies))

