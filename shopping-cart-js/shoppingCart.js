// your code, here
const fruit = {
  itemName: 'mango',
  quantity: 5,
  unit: 'lb',
};

const beverage = {
  itemName: 'pepsi',
  quantity: 2,
  unit: 'liter',
};

const snack = {
  itemName: 'popcorn',
  quantity: 3,
  unit: 'bag',
};

const protein = {
  itemName: 'ground beef',
  quantity: 1.5,
  unit: 'lb',
};

const shoppingCart = [fruit, beverage, snack, protein];

shoppingCart.forEach((item) => {
  if (item.quantity > 1) {
    console.log(`${item.quantity} ${item.unit}s of ${item.itemName}`);
  }
});
