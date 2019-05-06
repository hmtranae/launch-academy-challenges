import React from 'react';

const shortid = require('shortid');

const List = props => {
  const { header, listItem } = props;
  const listItems = listItem.map((item) => {
    return <li key={shortid.generate()}> {item}</li>
  })
  return (
    <div className='box list'>
      <h1>{header}</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default List;
