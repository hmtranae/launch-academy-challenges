import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

// import Wrapper from './components/Wrapper';
import Box from './components/Box';

// import Picture from './components/Picture';
// import List from './components/List';
// import Numbers from './components/Numbers';

let date = (new Date).toString()
let random = parseInt(Math.random() * 100)

let wrapperParagraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium nam dolorum impedit doloremque, minus neque repellat facere qui molestiae aliquid corrupti iure enim est nesciunt labore laboriosam ab? Dignissimos.'

let numbersParagraph = `Today's date is ${date} and ${random} is a random number.`

const listItems = ['Asteroids', 'Comets', 'Moon', 'Planets', 'Stars', 'Sun'];

ReactDOM.render(
  <div>
    <Box
      propsBoxClass='numbers'
      propsParagraph={numbersParagraph}
      header="Today's Date and Random Number"
    />
    <Box
      propsBoxClass='picture'
      header='Look at This Picture'
      url='https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'
      imgAlt='Clever EEs'
    />
    <Box
      propsBoxClass='wrapper'
      header='I am the Wrapper'
      propsParagraph={wrapperParagraph}
    />
    <Box
      propsBoxClass='list'
      header='Here is the list'
      listItems={listItems}
    />
  </div>,
  document.getElementById('app')
);
