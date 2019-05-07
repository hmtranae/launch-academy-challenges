import React from 'react';

const Grocery = (props) => {
  const { item, handleClick } = props;
  return (
    <li>
      {item}
      <span>
        <button className='button' type='button' onClick={handleClick}>Delete</button>
      </span>
    </li>
  )
}

export default Grocery;