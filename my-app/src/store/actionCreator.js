import {CHANGE_USERINFO,REMOVE_USERINFO,BUY_SHOPPING}  from "./const"

const actionCreator = {
    getInitUserinfo(){
       let userinfo = localStorage.userinfo ? JSON.parse(localStorage.userinfo) : null
       
       return {
           type:CHANGE_USERINFO,
           userinfo
       }
    },
    login({username,password,success,fail}){
        return dispatch=>{
            setTimeout(()=>{
                if(username==="123"&&password==="456"){
                    let userinfo={
                        userId:1,
                            username:"帅锅",
                            imgUrl:"/images/ergouzi.jpg"
                    }
                    let action = {
                        type:CHANGE_USERINFO,
                        userinfo
                    }
                    dispatch(action)
                    success()
                    localStorage.userinfo = JSON.stringify(userinfo)
                    return
                }
                fail()
            },1000)
        }
    },
    exit(){
        localStorage.removeItem("userinfo")
        return{
            type:REMOVE_USERINFO
        } 
    },
    
    buy(shopping){
        localStorage.shop=("id",JSON.stringify(shopping))
        return {
            type : BUY_SHOPPING
        }
    }
}
export default actionCreator