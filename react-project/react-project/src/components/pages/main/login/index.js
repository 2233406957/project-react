import React ,{Component} from 'react';

import './index.scss';

import {Link} from 'react-router-dom';

import Loginform from "./loginform"

import {NavBar,Icon} from 'antd-mobile';
class Login extends Component{
    
   
    render (){
        return (
            <div className='login'>
           
                <NavBar
                mode="dark"
                icon ={<Link to='/'><Icon type="left"/></Link>}
                    >登录
                </NavBar>
                <Loginform history={this.props.history}/>
            </div>
        )
    }
}
export default Login