import React ,{Component} from 'react';

import './index.scss';

import {connect} from "react-redux"

import {bindActionCreators} from "redux"

import {Toast} from "antd-mobile"

import actionCreators from "../../../../store/commons/actionCreator"

import {List} from 'antd-mobile';
class Loginform extends Component{
   constructor(props){
       super(props)
       this.submitHandel = this.submitHandel.bind(this)
   }
    submitHandel(e){
        e.preventDefault();
        let username = this.username.value;
        let password  = this.password.value;
        console.log(this.props)
        this.props.login({
            username,password,
            success:()=>{
                Toast.success("登录成功",1,()=>{
                    // this.props.history.replace("/main/user")
                })
            },
            fail:()=>{
                Toast.fail("登录失败",1)
            }
        })
    }
    render (){
        return (
            <div className='login-form'>
            <List>
            <form onSubmit={this.submitHandel}>
                <div className="allInput">
                <input type="text" placeholder="请输入用户名" ref = {el => this.username = el}/>
                <input type="password" placeholder="请输入密码" ref={ el => this.password = el} />
                </div>
                <div className="allButton">
                    <button type="submit">登录</button>
                    <button type="reset">重置</button>                    
                </div>
         </form>
          </List>
            </div>
           
        )
    }
}
export default connect(state=>state,dispatch=>{
    return bindActionCreators(actionCreators,dispatch)
})(Loginform)