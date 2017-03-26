import React from 'react';
import Book from './Book';
import Form from './Form';

class Booklist extends React.Component {
	constructor(props){
		// Super method, for the inheritance to work
		super(props);
		// Customisation
		this.state = { books: [], authors: {} };
	}
	// Fetch request for the data
	componentDidMount() {
		fetch("http://localhost:8000/api/books")
			// return generic response object, read the json
			.then(response => response.json())
			// this is going to return another promise
			// > list of books
			.then(books => {
				this.setState({ books })
			});
		fetch("http://localhost:8000/api/authors")
			// return generic response object, read the json
			.then(response => response.json())
			// this is going to return another promise
			// > list of authors
			.then(authors => {
				this.setState({ authors })
			})
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
	// Function to add the book
	addBook = (title, price) => {
		// Modify the state to change the current book list
		// and concat a new object to that list
		this.setState({
			books: this.state.books.concat({
				id: Date.now(),
				title,
				price
			})
		});
	};
	render(){
		return (
			<ul className="books">
				{this.state.books.map(book =>{
					return (
						//  author object is a lookup call
						<Book 
							key={ book.id } 
							book={ book } 
							author={ this.state.authors[book.authorId] } 
							handleDelete={ this.deleteBook }
						/>
					);
				})}
				<li>
					<Form addBookAction={ this.addBook } />
				</li>
			</ul>
		);
	}
}

export default Booklist;