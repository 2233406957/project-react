import {CHANGE_INPUT,ADD_ITEM} from "./actionTypes"
 
export default (state,action) => {
   switch(action.type){
       case CHANGE_INPUT :
            return {
                inputValue :action.value,
                list:[...state.list]
            };
        case ADD_ITEM :
            return {
                inputValue :"",
                list:[...state.list,state.inputValue]
            }
       default:
           return state
   }
}