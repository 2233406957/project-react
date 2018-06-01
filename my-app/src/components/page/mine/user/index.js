import "./index.scss"

import React,{Component} from "react"

import login from "../../../page/mine/login/index"

import {connect} from "react-redux"

import actionCreator from "../../../../store/actionCreator"

import {bindActionCreators} from "redux"

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

class user extends Component {
    constructor(props){
        super(props)
        this.exit = this.exit.bind(this)
    }
    exit(){
        this.props.exit()
        this.props.history.replace("/mine/login")
    }
    render(){
        let {userinfo} = this.props
        return(
            <Router>
            <div className = "user">
                <div className="headernav">
                    <dl>
                        <dt><img src={userinfo.imgUrl} alt=""/></dt>
                        <dd>{userinfo.username}</dd>
                        <button onClick={this.exit}>注销</button>
                        
                    </dl>
                    <Switch>
                    <Route exact path="./login" component={login}/>
                    </Switch>
                </div>
                <div className="nav">
                    {this.getUser()}
                </div>
                <ul className="usernav">
                    {this.getNavs()}

                </ul>
            </div>
            </Router>
        )
        
    }
    getUser(){
    let {routes} = this.props
    return (
        routes.map(item=>{
            return (
                <a href="" key={item.id}>
                <i className={" fa fa-"+item.icon}></i>
                <span>{item.title}</span>
            </a>
            )
        })
    )
    
}
getNavs(){
    let {navs} = this.props
    return (
        navs.map(item=>{
            return (
                <div  key={item.id}>
                <i className={" fa fa-"+item.icon}></i>
                <p><span>{item.title}</span><span>{item.right}</span></p>
            </div>
            )
        })
    )
    
}
}


user.defaultProps = {
    routes : [
        {id: 1, icon: 'credit-card-alt', title: '待付款', path: ''},
        {id: 2, icon: 'credit-card', title: '收货', path: ''},
        {id: 3, icon: 'ambulance', title: '发货', path: ''},
        {id: 4, icon: 'paypal', title: '退款售后', path: ''},
        {id: 5, icon: 'skype', title: '我的订单', path: ''}
    ],
    navs:[
        {id: 6, icon: 'credit-card-alt', title: '苏打卡', right: '>'},
        {id: 7, icon: 'credit-card', title: '现金券', right: '>'},
        {id: 8, icon: 'ambulance', title: '客服', right: '>'},
        {id: 9, icon: 'paypal', title: '设置', right: '>'},
    ]

  }
export default connect(state=>state,dispatch=>{
    return bindActionCreators(actionCreator,dispatch)
})(user);