import React from 'react';
import ReactDOM from 'react-dom';
import { data } from './data';

console.log(data);

const Book = ({ book }) => (
	<li>
		{ book.title } -- { book.price }
	</li>
)

const Booklist = (props) => (
	<ul>
		{props.books.map(book =>{
			return (
				<Book key={ book.id } book={ book } />
			);
		})}
	</ul>
)

ReactDOM.render(
  <Booklist books={ data.books } />,
  document.getElementById('root')
);
