import "./index.scss"

import React,{Component} from "react"

import {connect} from "react-redux"

import {
    NavLink,withRouter
  } from 'react-router-dom'
const NavItem=({item,userinfo})=>{
  let path = item.path
  if(path==="/mine"&&userinfo){
    path="/mine/user"
  }
  return (
    <NavLink exact to={path} activeClassName="selected">
        <i className={"fa fa-"+item.icon}></i>
        <span>{item.title}</span>
    </NavLink>
  )
}
  class  footer extends Component {
    render(){
      let {navs,userinfo} = this.props
        return(
        <div className="footer">
            {
              navs.map(item=>{
                return <NavItem userinfo={userinfo} key={item.id} item={item}/>
              })
            }

        </div>
        )
    }
   
    
  }
footer.defaultProps={
  navs:[
    {id:1,icon:"home",title:"首页",path:"/"},
    {id:2,icon:"align-justify",title:"列表",path:"/list"},
    {id:3,icon:"shopping-cart",title:"购物车",path:"/car"},
    {id:4,icon:"user",title:"我的",path:"/mine"}
  ]
}
  
export default withRouter(connect(state=>state)(footer));