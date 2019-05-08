import React from 'react';

const StepTile = props => {
  return (
    <li onClick={props.handleClick}>
      {props.step}
    </li>
  )
}

export default StepTile;
