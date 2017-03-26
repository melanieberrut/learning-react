import React from 'react';

const Book = ({ book, handleDelete }) => {
	const handleClick = (event) => {
		event.preventDefault();
		handleDelete( book.id );
	}
	return (
		<li className="book">
			<div className="title">
			{ book.title }
			</div>
			<div className="price">
			{ book.price }
			</div>
			<div className="delete">
				<a href="#" className="delete" onClick={ handleClick }>
				Delete
				</a>
			</div>
		</li>
	)
}

export default Book;