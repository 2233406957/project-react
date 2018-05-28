import "./index.scss"

import React,{Component} from "react"

class header extends Component {
    render(){
        return(
            <div className = "header">
                <h1>
                    苏打优选
                </h1>
                <form action="" className="search">
                    <input type= "text" placeholder="搜索"/>
                </form>
            </div>
        )
        
    }
}

export default header;