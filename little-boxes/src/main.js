import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

// import Wrapper from './components/Wrapper';
import Box from './components/Box';

// import Picture from './components/Picture';
// import List from './components/List';
// import Numbers from './components/Numbers';

let wrapperParagraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium nam dolorum impedit doloremque, minus neque repellat facere qui molestiae aliquid corrupti iure enim est nesciunt labore laboriosam ab? Dignissimos.'

ReactDOM.render(
  <div>
    <Box
      propsBoxClass='wrapper'
      header='I am the Wrapper'
      propsParagraph={wrapperParagraph}
    />
  </div>,
  document.getElementById('app')
);
