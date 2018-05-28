

import store from "./index"

const actionCreator = {
    addNum(){
        let action = {
            type : "ADD_NUM"
        }
        store.dispatch(action)
    }
}
export default actionCreator