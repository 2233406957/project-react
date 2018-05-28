import React ,{Component} from 'react'

import {NavLink} from 'react-router-dom'

import {connect} from "react-redux"

import {withRouter} from 'react-router-dom'

import './index.scss'
 const NavItem = ({item,userinfo})=>{
     let path = item.path
     console.log(path)
     if(path==='/main' && userinfo){
         path='/main/user'
     }
        return (
            <NavLink exact activeClassName='active' to={{pathname:path}}>
                <i className={" fa fa-"+item.icon}></i>
                <span>{item.title}</span>
            </NavLink>
        )
    }

class Footer extends Component{
   
    render (){
        let {navs,userinfo} = this.props
        return (
            <div className='app-footer'>
                {
                    navs.map(item=>{
                        return <NavItem userinfo={userinfo} key={item.id} item={item}/>
                    })
                }
                
            </div>
        )
    }
}
Footer.defaultProps = {
    navs:[
        {id:1,icon:'home',title:'首页',path:'/'},
        {id:2,icon:'navicon',title:'列表',path:'/list'},
        {id:3,icon:'shopping-cart',title:'购物车',path:'/car'},
        {id:4,icon:'user',title:'我的',path:'/main'},
    ]
}
export default withRouter(connect(state => state.commons)(Footer))