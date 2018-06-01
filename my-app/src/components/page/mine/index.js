import "./index.scss"

import React,{Component} from "react"

import {Switch,Route} from "react-router-dom"

import User from "./user/index"

import {connect} from "react-redux"

import Login from "./login/index"
class Mine extends Component {
    componentWillMount(){
        let {history} = this.props
        if(!this.props.userinfo){
            history.replace("/mine/login")
        }else{
            history.replace("/mine/user")
        }
        
    }
    render(){
        return(
            <div className = "mine">
                <Switch>
                    <Route exact path="/mine/login" component={Login}/>
                    <Route exact path="/mine/user" component={User}/>
                </Switch>
            </div>
        )
        
    }
}

export default connect(state=>state)(Mine);