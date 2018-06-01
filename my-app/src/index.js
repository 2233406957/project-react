import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/swiper/dist/css/swiper.css"
import "./stylesheet/index.scss"
import "./stylesheet/rem"
import 'antd-mobile/dist/antd-mobile.css';
import store from "./store/index"
import {
    BrowserRouter as Router
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux"

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
