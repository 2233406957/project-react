import {createStore} from "redux"

import reducer from "./reducer"

const store = createStore(reducer,{
    inputValue : "",
    list : []
})

export default store 