import "./index.scss"

import React,{Component} from "react"

import {Route,Link,Switch} from "react-router-dom"

import register from "../register/index"

import {connect} from "react-redux"

import {bindActionCreators} from "redux"

import { Toast } from 'antd-mobile'

import actionCreator from "../../../../store/actionCreator"

class login extends Component {
    constructor(props){
        super(props)
        this.handelSubmit=this.handelSubmit.bind(this)
    }
    handelSubmit(e){
        e.preventDefault();
        let username = this.username.value
        let password = this.password.value
        let {history} = this.props
        this.props.login({
            username,
            password,
            success:()=>{
                Toast.success('登陆成功!', 1, () => {
                    history.replace("/mine/user")
                });
                
                
            },
            fail:()=>{
                Toast.fail('登陆失败!', 1, () => {
                    history.replace("/mine/login")
                });
            }
        })
    }
    render(){
        return(
            <div className = "login">
                <header>
                    <Link to="/mine/register">注册</Link>
                    <Switch>
                        <Route exect path="/mine/register" component={register}/>
                    </Switch>
                </header>
                <div className="logo">
                    <img src="https://file.sdyxmall.com/h5/auth/public/app/img/logo.adec77d.png" alt=""/>
                </div>
                <div className="form-group">
                    <form onSubmit={this.handelSubmit}>
                        <div className="name">
                            <input type="text" placeholder="请输入用户名" ref={el=>this.username = el}/>
                        </div>
                        <div className="name">
                            <input type="password" placeholder="密码" ref={el=>this.password = el}/>
                        </div>
                        <div className="submit login-btn">
                            <button>立即登录</button>
                        </div>
                    </form>

                </div>
            </div>
        )
        
    }
}

export default connect(state=>state,dispatch=>{
    return bindActionCreators(actionCreator,dispatch)
})(login);