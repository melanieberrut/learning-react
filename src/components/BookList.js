import React from 'react';
import Book from './Book';

class Booklist extends React.Component {
	constructor(props){
		// Super method, for the inheritance to work
		super(props);
		// Customisation
		this.state = { books: this.props.books };
	}
	// Function to remove the book, with ID of the book
	deleteBook = (id) => {
		// Read the books from the state
		const currentBooks = this.state.books;
		// Filter the book to remove the selected one
		const books = currentBooks.filter(book => book.id !== id);
		// Change the state to the new array of books
		this.setState({ books });
	};
	render(){
		return (
			<ul className="books">
				{this.state.books.map(book =>{
					return (
						<Book 
							key={ book.id } 
							book={ book } 
							handleDelete={ this.deleteBook }
						/>
					);
				})}
			</ul>
		);
	}
}

export default Booklist;