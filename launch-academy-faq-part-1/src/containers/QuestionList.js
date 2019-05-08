import React from 'react';
import QuestionTile from '../components/QuestionTile'

class QuestionList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedQuestion: null
    }

    this.handleClick = this.handleClick.bind(this);
    this.generateQuestionsArray = this.generateQuestionsArray.bind(this);
  }

  handleClick(questionId) {
    let { selectedQuestion } = this.state;

    (selectedQuestion === questionId) ?
      this.setState({ selectedQuestion: null }) :
      this.setState({ selectedQuestion: questionId })
  }

  generateQuestionsArray() {
    const { data } = this.props;
    let { selectedQuestion } = this.state;

    return data.map(question => {

      let onQuestionClick = () => {
        this.handleClick(question.id)
      }

      return (
        <QuestionTile
          selectedId={selectedQuestion}
          handleClick={onQuestionClick}
          question={question}
          key={question.id}
        />
      )
    })
  }

  render() {
    const questions = this.generateQuestionsArray();

    return (
      <div>
        {questions}
      </div>
    )
  }
}

export default QuestionList;
