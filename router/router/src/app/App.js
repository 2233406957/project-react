import React, { Component } from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router'
import CommentWraper from '../components/commentWraper/View'
import "./style.css"
import "./reset.css"
import 'antd/dist/antd.css'; 
import { Row, Col } from 'antd';
class App extends Component {
  render() {
    return (
      <div className= "main">
        <Router history={browserHistory}>
          <Route path='/' component={CommentWraper}>
          <div>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>col-6 col-offset-6</Col>
      <Col span={6} offset={6}>col-6 col-offset-6</Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>col-12 col-offset-6</Col>
    </Row>
  </div>,
          </Route>
         
        </Router>
        </div>
    );
  }
}

export default App;
