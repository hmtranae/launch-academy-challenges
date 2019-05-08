import React from 'react';

const StepTile = props => {
  const { step, handleClick, className } = props;
  return (
    <li className={className} onClick={handleClick}>{step}</li>
  )
}

export default StepTile;
