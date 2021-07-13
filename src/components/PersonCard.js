import React, { Component } from 'react'

class PersonCard extends Component {

state = {
    number: this.props.age,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    age: this.props.age,
    hairColor: this.props.hairColor,
    id: this.props.id
}

  handleIncrement = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  handleReset = () => {
    this.setState({
      number: 0
    })
  }

  render() {
   
    return (
    <>
    <div className="card">
        <h2 className="card__title">{this.props.firstName}, {this.props.lastName}</h2>
        <p className="card__description">Age: {this.state.number}</p>
        <p className="card__description">Air Color: {this.props.hairColor}</p>
        <button className="btn" onClick={this.handleIncrement}>Increment</button>
        <button className="btn" onClick={this.handleDecrement}>Decrement</button>
        <button className="btn" onClick={this.handleReset}>Reset</button>
    </div>
    </>
    );
  }
}


export default PersonCard;