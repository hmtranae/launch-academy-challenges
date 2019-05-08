import React from 'react';
import QuestionList from './QuestionList';

const App = (props) => {
  const { data } = props;

  return (
    <div>
      <h1>We're here to help</h1>
      <QuestionList
        data={data}
      />
    </div>
  )
}

export default App;
