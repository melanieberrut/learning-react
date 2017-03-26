import React from 'react';

const Book = ({ book, handleDelete }) => {
	const handleClick = (event) => {
		event.preventDefault();
		handleDelete( book.id );
	}
	const formatPrice = priceInCents => {
		if ( priceInCents === undefined ) {
			return 'Free';
		}
		return `$ ${ (priceInCents/100).toFixed(2) }`;
	};
	return (
		<li className="book">
			<div className="title">
			{ book.title }
			</div>
			<div className="price">
			{ formatPrice(book.price) }
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