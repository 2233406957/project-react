import React, { Component } from 'react';

import {withRouter,Route,Switch,Redirect} from "react-router-dom"

import Footer from "./components/page/footer/index"

import Home from "./components/page/home/index"

import Car from "./components/page/car/index"

import Mine from "./components/page/mine/index"

import List from "./components/page/list/index"

import particulars from "./components/page/particulars/index"

import {connect} from "react-redux"

import actionCreator from "./store/actionCreator"
 
class App extends Component {
  componentWillReceiveProps(){
  }
  componentWillMount(){
    this.props.getInitUserinfo()
  }
  renderFooter(){
    let {pathname} = this.props.location
    if(pathname ==="/mine"||pathname==="/mine/login"||pathname==="/list"||pathname==="/particulars/0"||pathname==="/particulars/1"||pathname==="/particulars/2"||pathname==="/particulars/3"||pathname==="/particulars/4"||pathname==="/particulars/5") return ""
    return (<Footer/>)
  }
  renderRoutes(){
    let {routes} = this.props
    return (
          routes.map(item=>{
            return (<Route exact={item.isExact} path={item.path} component={item.component} key={item.id}/>)
          })
        
    )
  }
  render(){
    return (
      <div className="App">
      <Switch>
      {this.renderRoutes()}
      <Redirect from="**" to='/'/>
      </Switch>
     {this.renderFooter()}
      </div>
    )
  }
  
 
}
App.defaultProps={
  routes :[
    {id:1,path:"/",component:Home,isExact:true},
    {id:2,path:"/car",component:Car},
    {id:3,path:"/mine",component:Mine},
    {id:4,path:"/list",component:List},
    {id:5,path:"/particulars/:id",component:particulars}
  ]
}
export default withRouter(connect(state=>state,dispatch=>{
  return {
    getInitUserinfo(){
      dispatch(actionCreator.getInitUserinfo())
    }
  }
})(App));
