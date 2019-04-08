// your code here
// Array for shopping list with items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'.
const shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

// Adds 'fruit loops' to the list.
shoppingList.push('fruit loops');

// Updates 'coffee' to 'fair trade coffee'
shoppingList[shoppingList.indexOf('coffee')] = 'fair trade coffee';

// Replaces 'chips' and 'salsa' with 'rice' and 'beans'
shoppingList.splice(shoppingList.indexOf('chips'), 2, 'rice', 'beans');

// Creates an empty array to represent your shopping cart.
const shoppingCart = [];

// Removes the last item from your shopping list and add it to your cart
shoppingCart.push(shoppingList.pop());

// Removes the first item from your shopping list and add it to the cart
shoppingCart.push(shoppingList.shift());

// while loop takes items from shopping list and moves them to cart until there are no items left
while (shoppingList.length > 0) {
  shoppingCart.push(shoppingList.pop());
}

// Sorts the items in your cart alphabetically... backwards
const sortedArray = shoppingCart.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  return -1;
});

console.log(sortedArray);

// Prints the list of items in your shopping cart to the console as a comma separated string.
let message = '';

sortedArray.forEach((item) => {
  message += `${item}, `;
});

console.log(message.slice(0, message.length - 2));
