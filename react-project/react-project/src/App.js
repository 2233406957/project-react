import React, { Component } from 'react';

import {Route,Switch,Redirect,withRouter} from 'react-router-dom'

import Home from './components/pages/home/index'

import List from './components/pages/list/index'

import Car from './components/pages/car/index'

import Main from './components/pages/main/index'

import Appfooter from './components/comments/footer/index'

import { connect } from "react-redux";

import actionCreator from "./store/commons/actionCreator"

class App extends Component {
  componentWillMount(){
    this.props.getInitialUserinfo()
  }

  renderFooter(){
    let {pathname} = this.props.location

    let nofooters = ["/main/login"]

   let noFooter = nofooters.some(item=>{
      if( item===pathname ){
        return true;
      }
      return false
    })
    if(noFooter) return ""
    return (<Appfooter/>)
  }

  renderRoutes(){
    let {routes} = this.props
    return  routes.map(item => {
          return (<Route 
            exact={item.isExact}
             path={item.path} 
             key = {item.id}
             component={item.component}/>)
         } )
  }
  render() {
    return (
      <div className='app'>
      <Switch>
         {this.renderRoutes()}
         <Redirect from ="**" to="/"/>
      </Switch>
      {this.renderFooter()}
      </div>
    );
  }
}
App.defaultProps = {
  routes : [
    {id:1,path:'/',component:Home,isExact:true},
    {id:2,path:'/list',component:List},
    {id:3,path:'/car',component:Car},
    {id:4,path:'/main',component:Main}
  ]
}
export default withRouter(connect(state=>state,dispatch=>{
  return {
    getInitialUserinfo(){
      dispatch(actionCreator.getInitialUserinfo())
    }
  }
})(App));
