import React, { Component } from 'react';
import StepTile from '../components/StepTile';
import ItemTile from '../components/ItemTile';
import FetchButton from '../components/FetchButton';

class InstructionsContainer
  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    }
  }

  setSelectedStep(stepId) {
    // BAD!!! this.state.selectedId = stepId
    this.setState({
      selectedId: stepId
    })
  }

  render() {
    console.log(this.state);
    let supplies = this.props.data.supplies
    let directions = this.props.data.directions

    let items = supplies.map(supply => {
      return (
        <ItemTile
          item={supply.item}
          key={supply.id}
          id={supply.id}
        />
      )
    })

    let steps = directions.map(direction => {
      let className;
      let handleClick = () => {
        this.setSelectedStep(direction.id)
      }
      return (
        <StepTile
          handleClick={handleClick}
          step={direction.step}
          key={direction.id}
          id={direction.id}
        />
      )
    })

    return (
      <div>
        <h1>How To {this.props.data.activity}</h1>
        <h3>Supplies:</h3>
        <ul>
          {items}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {steps}
        </ol>
        <FetchButton />
      </div>
    )
  }
}

export default InstructionsContainer
  ;
