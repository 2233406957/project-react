import {CHANGE_USERINFO,REMOVE_USERINFO,BUY_SHOPPING} from "./const"


import _state from "./state"

const reducer = (state =_state,action)=>{
    let new_state = {...state}
    switch(action.type){
      case CHANGE_USERINFO : 
        new_state.userinfo =action.userinfo;break;
        default:break;
       case REMOVE_USERINFO :
       new_state.shopping = null;break;
       case BUY_SHOPPING :
       new_state.shopping = action.shopping;break;
     }
    return new_state
}


export default reducer