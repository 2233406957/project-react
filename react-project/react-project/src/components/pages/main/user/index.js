import React ,{Component} from 'react'

import './index.scss'

import GroupCommons from "../../../../modules/group-commons"
 
class User extends Component{
    constructor(props){
         super(props)
         this.exit = this.exit.bind(this)
    }
   
    exit(){
        this.props.exit()
        this.props.history.replace("/main/login")
    }
    render (){
        let {userinfo} =this.props;
        return (
            <div className='user'>
                <div className="header">
                    <div className="bg"></div>
                        <div className="user-info">
                            <div className="head-img">
                                <img src={userinfo.headimgurl} alt=""/> 
                            </div>
                            <p className="username">
                                    {userinfo.username}
                                </p>
                                <p><button onClick={this.exit} type="reset" className="exit">注销</button></p>
                        </div>
                </div>
            </div>
        )
    }
}
export default GroupCommons(User)