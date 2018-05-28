import {CHANGE_INPUT,ADD_ITEM} from "./actionTypes"

export const getInputChangeAction = (value)=>({
    type :CHANGE_INPUT,
    value
})

export const getAddItemAction = ()=>({
    type :ADD_ITEM,
})