import "./index.scss"

import React,{Component} from "react"

import axios from "axios"

class main extends Component {
    constructor(props){
        super(props)
        this.state = {
            list : []
        }
    }
    render(){
        return(
            <div className = "mian">
                {this.showList()}
            </div>
        )
   
        
    }
    getMain(){
            axios.get("/index.json",{
                params :{__t:Date.now()}
            }).then(res=>{
            //console.log(res.data.list)
            this.setState({list:res.data.list})
            })
        }

    showList(){
        let {list} = this.state
        return (
            list.map(item=>{
               return (
                   <div key = {item.topicId} className="listMain">
                       <span className="title">{item.masterTitle}</span>
                       <span>{item.slaveTitle}</span>
                       <img src={item.imgUrl} alt=""/>

                   </div>
               )
            })
            
        )
    }
    componentWillMount(){
        this.getMain()
    }
}
export default main;