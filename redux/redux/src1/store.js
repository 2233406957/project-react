import {createStore} from "redux"

import reduce from "./reducer"

const store = createStore(reducer,{
    inputValue : "",
    list : []
})

export default store