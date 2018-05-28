import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Todolist />, document.getElementById('root'));
registerServiceWorker();
