import React from 'react';
import ReactDOM from 'react-dom';
import './stypesheet/index.scss';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
import 'swiper/dist/css/swiper.min.css'
import './stypesheet/reset.css'
import 'antd-mobile/dist/antd-mobile.css';
import "./modules/rem"
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router
} from 'react-router-dom'

ReactDOM.render(
    <Provider store = { store } >
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
