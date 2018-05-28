import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/swiper/dist/css/swiper.css"
import "./stylesheet/index.scss"
import "./stylesheet/rem"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
