import React, { Component } from 'react'

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Add restaurant: </label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <label> </label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default RestaurantInput
