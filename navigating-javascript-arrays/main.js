let supplies = ["space helmet", "canister of oxygen", "water recycler", "big red button", "freeze dried ice cream", "tang drink mix"]

// 1.)  Using a `forEach` loop, write a function called `supplyCheck` that takes in an array of supplies as an argument, and logs each item to your console. It should match the message of "SUPPLY ITEM is logged and accounted for."

// Your code here....
function supplyCheck(supplies) {
    supplies.forEach(item => {
        console.log(`${item} is logged and accounted for.`)
    });
}

console.log(supplyCheck(supplies))

// 2.) Create a function named stowSupplies that takes in our array of supplies, and returns item name and its index number in a formatted string.

function stowSupplies(supplies) {
    supplies.forEach((item, index) => {
        console.log(`Supply item: ${item} is index number ${index}`)
    });
}

console.log(stowSupplies(supplies))

// 3.) Create a function named addAlphabetically that takes in our array of supplies and a new supply item and returns an array of supplies with that new item, sorted alphabetically.

function addAlphabetically(supplies, newItem) {
    supplies.push(newItem)
    return supplies.sort();
}

console.log(addAlphabetically(supplies, "laser pistol"))

// 4.) Create a function named stockCheck that takes in an inventory checklist array, and an array of supplies, and returns an array of items that are missing from the checklist.

function stockCheck(inventory, supplies) {
    // let missingItems = inventory.map(item => {
    //     if (!supplies.includes(item)) {
    //         return item;
    //     }
    // })  
    // return missingItems.filter(Boolean); 

    let missingItems = inventory.filter(item => {
        return !supplies.includes(item);
    });

    return missingItems;
}

let inventoryChecklist = ["big red button", "canister of oxygen", "freeze dried ice cream", "jetpack", "tang drink mix", "space helmet", "space brussels sprouts", "water recycler", "welding torch"]

console.log(stockCheck(inventoryChecklist, supplies))

// 5.) Create a function named addMissingSupplies that takes in an array of supplies, and an array of missing supplies, and returns a new array with all of the items combined! Use your stockCheck method to help you with this.

function addMissingSupplies(supplies, missingSupplies) {
    return supplies.concat(missingSupplies)
}

console.log(addMissingSupplies(supplies, stockCheck(inventoryChecklist, supplies)))
