import React from 'react';
import ReactDOM from 'react-dom';
import { data } from './data';

console.log(data);

const Book = ({ book }) => (
	<li>
		{ book.title } -- { book.price }
	</li>
)

class Booklist extends React.Component {
	constructor(props){
		// Super method, for the inheritance to work
		super(props);
		// Customisation
		this.state = { books: this.props.books };
	}
	render(){
		return (
			<ul>
				{this.state.books.map(book =>{
					return (
						<Book key={ book.id } book={ book } />
					);
				})}
			</ul>
		);
	}
}

ReactDOM.render(
  <Booklist books={ data.books } />,
  document.getElementById('root')
);
