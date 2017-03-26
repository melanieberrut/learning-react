import React, { Component, PropTypes } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = { titleValue: '' }
	}
	// First, need to verify that what we get from addBookAction is a function
	static propTypes = {
		addBookAction: PropTypes.func.isRequired
	}

	handleButtonClick = (event) => {
		event.preventDefault();
		// invoke addbookaction
		this.props.addBookAction(
			this.state.titleValue
		);
		// clear input after submit
		this.setState({ titleValue: '' })
	}
	handleTitleChange = (event) => {
		this.setState({ titleValue: event.target.value });
	}

	render() {
		return (
			<div className="Form">
				<input 
					type="text" 
					placeholder="this is the book title" 
					ref="titleInput" 
					value={ this.state.titleValue } 
					onChange={ this.handleTitleChange } />
				<button onClick={ this.handleButtonClick }>Add Book</button>
			</div>
		)
	}
}

export default Form;