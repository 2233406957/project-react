import {Dispatcher} from "flux"

import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from "./actionTypes"

import store from "./store"
const dispatcher = new Dispatcher()

dispatcher.register((action)=>{
   if(action.type ===CHANGE_INPUT){
       store.changeInput(action.value)
   }else if(action.type ===ADD_ITEM){
       store.addItem()
   }else if(action.type ===DELETE_ITEM){
       store.deleteItem()
   }
})

export default dispatcher