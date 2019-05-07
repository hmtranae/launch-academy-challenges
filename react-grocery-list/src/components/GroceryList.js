import React from 'react';
import Grocery from './Grocery';

const GroceryList = (props) => {
  const { groceries, handleButtonClick } = props;

  const groceryList = groceries.map(grocery => {
    return <Grocery key={grocery.id} item={grocery.name} handleClick={handleButtonClick} />
  })

  return (
    <ul>
      {groceryList}
    </ul>
  )
}

export default GroceryList;
