import React ,{Component} from 'react'

import './index.scss'

import {Switch,Route} from "react-router-dom"

import {connect} from "react-redux"

import Login from "./login/index"

import User from "./user/index"

class Main extends Component{
    componentWillReceiveProps(props){
        let { history } = this.props
        if(props.userinfo!==this.props.userinfo){
             if(props.userinfo){
            history.replace("/main/user")
        }else{
            history.replace("/main/login")
        }
        }
       
    }
   
    componentWillMount(){
        let {history} = this.props
        if(!this.props.userinfo){
            history.replace("/main/login")
        }else{
            this.ToUser()
        }
    }
    ToUser () {
        let { history } = this.props
        history.replace('/main/user')
    }
    render (){
        return (
            <div className='main'>
                
                <Switch>
                    <Route path='/main/login' exact component={Login}/>
                    <Route path='/main/user' exact component={User}/>
                </Switch>
            </div>
        )
    }
}
export default connect(state=>state.commons)(Main)