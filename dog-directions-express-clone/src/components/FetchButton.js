import React from 'react';

const FetchButton = props => {
  const { handleClick } = props
  return (
    <button onClick={handleClick} type='button'>Get Favorite Thing</button>
  )
}

export default FetchButton;
