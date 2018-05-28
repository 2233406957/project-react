import {CHANGE_USER_INFO,REMOVE_USER_INFO} from "./const"
 
const actionCreator = {
    getInitialUserinfo(){
     let  userinfo =  localStorage.userinfo ? JSON.parse(localStorage.userinfo) :null
        return {
            type :CHANGE_USER_INFO,
            userinfo
        }
    },

    login({username,password,success,fail}){
        return dispatch=>{
            setTimeout(()=>{
                if(username === "123"&&password ==="456"){
                    
                        
                      let  userinfo = {
                            userId:1,
                            username:"二狗子",
                            headimgurl:"/images/ergouzi-head.jpeg"
                        }
                    
                    let action = {
                        type :CHANGE_USER_INFO,
                        userinfo
                    }
                    dispatch(action)
                    success()
                    localStorage.userinfo=JSON.stringify(userinfo)
                    return false;
                }
                fail()
            },1000)
        }
    },
    exit(){
        localStorage.removeItem("userinfo")
        return {
            type :REMOVE_USER_INFO,

        }
    }
}

export default actionCreator