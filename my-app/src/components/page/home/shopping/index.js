import "./index.scss"

import React,{Component} from "react"

import axios from "axios"

import {Link} from "react-router-dom"


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
                <div className="shoppingList">
                    {this.showShopping()}
                </div>
            </div>
        )
    }
    showShopping(){
        let {shopping} = this.state;
        return(
            shopping.map((item,index)=>{
                return (
                    <Link to={"/particulars/"+index} key={item.productId}>
                    <div className="popular-item" >
                        <dl>
                            <dt><img src={item.imgUrl} alt=""/></dt>
                            <dd>
                                <p className="masterName">{item.masterName}</p>
                                <p className="slaveName">{item.slaveName}</p>
                                <p className="price">￥{item.price}</p>
                            </dd>
                        </dl>
                    </div>                    
                    </Link>
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