const dehydratedBanana = 1.27
const tofuCake = 4.17
const cheeseSpread = 3.79
const dehydratedIceCreamSandwich = 0.75

const foodArray = [dehydratedBanana, tofuCake, cheeseSpread, dehydratedIceCreamSandwich];

console.log(`It's working so far!`)
console.log(`Two tofu cakes and two dehydrated ice cream sandwiches cost $${(2 * tofuCake) + (2 * dehydratedIceCreamSandwich)}`)
console.log(`Eight cheese spreads and a dehydrated banana cost $${(8 * cheeseSpread) + (dehydratedBanana)}`)

// uneccessary but testing using reduce
console.log(`Three of each item on the menu cost $${foodArray.reduce((acc, curr) => {return acc + (3 * curr)}, 0)}`)
// OR!!!
console.log(`Three of each item on the menu cost $${3 * (dehydratedBanana + tofuCake + cheeseSpread + dehydratedIceCreamSandwich)}`)