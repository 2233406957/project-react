import {EventEmitter} from "events"

const store = Object.assign({},EventEmitter.prototype,{
     state : {
        inputValue : "",
        list : []
    },
    getState(){
        return this.state
    },
    changeInput(value){
        this.state.inputValue = value
        this.emit("change")
    },
    addItem(){
        this.state = {
            list:[...this.state.list,this.state.inputValue],
            inputValue :''
        }
        this.emit("change")
    },
    deleteItem(index){
        const list = [...this.state.list]
        list.splice(index,1)
        this.state.list = list
        this.emit("change")
    }
})
export default store