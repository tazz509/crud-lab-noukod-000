import React, { Component } from 'react'

class ReviewInput extends Component {

	state = {
		text: ''
	}

  handleOnChange = event => {
  	this.setState({
  		text: event.target.value
  	})
  }

  handleOnSubmit = event => {
  	event.preventDefault()
  	this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
  	this.setState({
  		text: ''
  	})
  }	

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
        	<br />
        	<label>Add review: </label>
        	<input
        		type = 'text'
				value={this.state.text}
				onChange={this.handleOnChange}
        	/>
        	<label> </label>
        	<input type='submit' />
        </form>
      </div>
    )
  }
}

export default ReviewInput