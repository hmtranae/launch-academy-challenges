const eggs = {
  itemName: 'dozen eggs',
  quantity: 2,
  price: 0.99,
};

const milk = {
  itemName: 'gallon of milk',
  quantity: 1,
  price: 2.99,
};

const bread = {
  itemName: 'loaf of bread',
  quantity: 1,
  price: 3.50,
};

const coffee = {
  itemName: 'lbs. of coffee',
  quantity: 10,
  price: 8.99,
};

const shoppingCart = [eggs, milk, bread, coffee];

// your code, here
// How much is one pound (lb.) of coffee?
console.log(`The price of one lb of coffee is ${coffee.price}`);

// How many gallons of milk are in the shopping cart?
console.log(`There are ${milk.quantity} ${milk.itemName}`);

const costPreTax = shoppingCart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
console.log(`Subtotal: $${costPreTax}`);

const taxRate = 6.25;
console.log(`Total: $${(costPreTax * (1 + (taxRate / 100))).toFixed(2)}`);
