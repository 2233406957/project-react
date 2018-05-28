import "./index.scss"

import React,{Component} from "react"

import axios from "axios"

class variety extends Component {
    constructor(props){
        super(props)
        this.state = {
            navs:[]
        }
    }
    render(){
        return(
            <div className = "variety">
                {this.showVariety()}
            </div>
        )
        
    }
    

    getVariety(){
        axios.get("/index.json").then(res=>{
            this.setState({navs:res.data.nav})
        })
    }
    showVariety(){
        let {navs} = this.state
        return(
                navs.map(item=>{
                    return (
                        <div key={item.id} className="list">
                            <img src={item.imgUrl} alt=""/>
                            <span>{item.title}</span>
                        </div>
                    )
                    
                }))
    }
    componentDidMount(){
        this.getVariety()
    }

}

export default variety;