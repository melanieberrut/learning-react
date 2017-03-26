import React from 'react';
import ReactDOM from 'react-dom';

import Booklist from './components/BookList';

ReactDOM.render(
  <Booklist books={ [] } authors={ {} } />,
  document.getElementById('root')
);
