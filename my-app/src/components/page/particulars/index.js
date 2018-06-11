import "./index.scss"

import React,{Component} from "react"

import {Link} from "react-router-dom"

import axios from "axios"

import {connect} from "react-redux"

import {bindActionCreators} from "redux"

import actionCreator from "../../../store/actionCreator"

class particulars extends Component {
    constructor(props){
        super(props)
        this.state={
            shopping:[],
            id:[],
            ismount:1,
            shop:[]
        }
        this.buy = this.buy.bind(this)
    }
    componentWillUnmount(){
        this.ismount = false;
    }
    render(){
        console.log(this)
        return(
            <div className = "particulars">
                {this.showshopping()}
            </div>
        )
        
    }
    componentWillMount(){
        this.getGoods()
        this.getId()
    }
    getId(){
        let id = this.props.location.pathname.split("/")[2]
        if(!this.ismount){
            this.setState({id:id})
        }
          
    }
    getGoods(){
        axios.get("/index.json").then(res=>{
            this.setState({shopping:res.data.shopping})
        })
    }
    
    
    showshopping(){
        let {shopping,id} = this.state
        if(!shopping[id]) return false;
        
       
            return (
                <div>
                    <div className="lazy-img"><img src={shopping[id].imgUrl }alt=""/>
                        <Link to="/" className="fa fa-home"></Link>
                    </div>
                <div className="item-info">
                    <div className="name">{shopping[id].masterName}</div>
                    <div className="parc">{shopping[id].slaveName}</div>
                    <div className="price"><span className="num">￥{parseInt(shopping[id].price)/100}</span><span>销量{shopping[id].salesCount}</span></div>
                    <div className="specification">规格：X1</div>
                </div>
                <div className="shop">
                    <dl>
                        <div className="fa fa-shopping-cart"><span>{shopping[id].isSku}</span></div>
                        <dd>立即购买</dd>
                        <dt onClick={this.buy}>加入购物车</dt>
                    </dl>
                </div>

                </div>
            )
            }
        buy(){  
            let {shopping,id,shop} = this.state
            this.props.buy(shopping[id])
        }
        
    
}

export default connect(state=>state,dispatch=>{
    return bindActionCreators(actionCreator,dispatch)
})(particulars);