import React from 'react';

const QuestionTile = (props) => {
  const { selectedId, handleClick, question } = props;

  return (
    <div>
      <p>
        <span onClick={handleClick}>
          <i className={'fas fa-lg ' + (selectedId === question.id ? 'fa-minus-square green' : 'fa-plus-square')} />
        </span>
        {question.question}
      </p>
      {selectedId === question.id ? (<p>{question.answer}</p>) : <div />}
      <hr />
    </div>
  )
}

export default QuestionTile;
