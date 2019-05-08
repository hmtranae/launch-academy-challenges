import React, { Component } from 'react';
import StepTile from '../components/StepTile';
import ItemTile from '../components/ItemTile';
import FetchButton from '../components/FetchButton';

class InstructionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      activity: '',
      supplies: [],
      directions: []
    }

    this.setSelectedStep = this.setSelectedStep.bind(this)
    this.onFetchButtonClick = this.onFetchButtonClick.bind(this)
    this.generateItems = this.generateItems.bind(this)
    this.generateSteps = this.generateSteps.bind(this)
  }

  onFetchButtonClick() {
    fetch('/api/v1/favoriteThings.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          activity: data.activity,
          supplies: data.supplies,
          directions: data.directions,
        })
      })
      .catch(err => console.log(err))
  }

  setSelectedStep(stepId) {
    this.setState({ selectedId: stepId })
  }

  generateItems() {
    const { supplies } = this.state;

    return supplies.map(supply => {
      return (
        <ItemTile
          item={supply.item}
          key={supply.id}
          id={supply.id}
        />
      )
    })

  }

  generateSteps() {
    const { directions, selectedId } = this.state;

    return directions.map(direction => {
      let className;
      if (direction.id === selectedId) {
        className = 'selected'
      }

      let handleClick = () => {
        this.setSelectedStep(direction.id)
      }

      return (
        <StepTile
          className={className}
          handleClick={handleClick}
          step={direction.step}
          key={direction.id}
          id={direction.id}
        />
      )
    })

  }

  render() {
    let { activity } = this.state;

    let items = this.generateItems();
    let steps = this.generateSteps();

    return (
      <div>
        <h1>How To {activity}</h1>
        <h3>Supplies:</h3>
        <ul>
          {items}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {steps}
        </ol>
        <FetchButton handleClick={this.onFetchButtonClick} />
      </div>
    )
  }
}

export default InstructionsContainer;
