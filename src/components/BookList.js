import React from 'react';
import Book from './Book';

class Booklist extends React.Component {
	constructor(props){
		// Super method, for the inheritance to work
		super(props);
		// Customisation
		this.state = { books: this.props.books };
	}
	render(){
		return (
			<ul class="books">
				{this.state.books.map(book =>{
					return (
						<Book key={ book.id } book={ book } />
					);
				})}
			</ul>
		);
	}
}

export default Booklist;