import React from 'react';
import ReactDOM from 'react-dom';
import { data } from './data';

import Booklist from './components/BookList';

ReactDOM.render(
  <Booklist books={ data.books } authors={ data.authors } />,
  document.getElementById('root')
);
