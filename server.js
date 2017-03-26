const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const { data } = require('./data');
const getBookAuthors = book  => {
	// book.authorId, or book authorIds
	// this way you alays have an array, made of 1 or many authors.
	const authorIds = book.authorId ? [book.authorId] : book .authorIds;

	return authorIds.map(authorId => data.authors[authorId]);
}
app.get('/api/books', (req, res) => {
  res.send(data.books.map( book =>{
  	// Return:
  	// a copy of the book
  	// authors of the book through a function
  	return Object.assign({}, book, {
  		authors: getBookAuthors(book)
  	});
  }));
});

app.listen(8000, () => {
  console.log('API server is at port 8000');
})
