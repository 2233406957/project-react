import {ADD_NUM} from "./const"


import _state from "./state"

const reducer = (state =_state,action)=>{
    let new_state = {...state}
    switch(action.type){
      case ADD_NUM : 
        new_state.num = handle.addNum(new_state.num);break;
        default:break;
    }
    return new_state
}
const handle  = {
    addNum(num){
        num++;
        return num
    }
}

export default reducer