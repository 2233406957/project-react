import "./index.scss"

import React,{Component} from "react"

import axios from "axios"

class shopping extends Component {
    constructor(props){
        super(props)
        this.state = {
            shopping : []
        }
    }
    render(){
        return(
            <div className = "shopping">
            <div className="white"></div>
                <div className="title">
                    人气优选>
                </div>
                <div>
                    {this.showShopping()}
                </div>
            </div>
        )
        
    }
    showShopping(){
        let {shopping} = this.state;
        return(
            shopping.map(item=>{
                return (
                    <div>1</div>
                )
        })
        )
        
    }
    getShopping(){
        axios.get("/index.json").then(res=>{
            this.setState({shopping:res.data.shopping})
        })
    }
    componentWillMount(){
        this.getShopping()
    }
}

export default shopping;