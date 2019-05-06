import React from 'react';
import Picture from './Picture';
import Numbers from './Numbers';
import List from './List';

const listItem = ['Asteroids', 'Comets', 'Moon', 'Planets', 'Stars', 'Sun'];

const Wrapper = props => {
  const { header, paragraph } = props
  return (
    <div className='box wrapper'>
      <Numbers
        header="Today's Date and Random Number"
      />
      <Picture
        url='https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'
      />
      <h1>{header}</h1>
      <p>{paragraph}</p>
      <List header='Here Is a List' listItem={listItem} />
    </div>
  )
}

export default Wrapper;
