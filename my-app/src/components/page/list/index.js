import "./index.scss"

import React,{Component} from "react"

import {NavLink} from "react-router-dom"


import axios from "axios"

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            listbox:[]
        }
    }
   componentWillMount(){
    this.getListBox()
   }

    getListBox(){
        axios.get("/index.json").then(res=>{
            this.setState({listbox:res.data.listbox})
        })
    }
    showListBox(){
        let {listbox} = this.state
        return (
           listbox.map(item=>{
            return (
                <div key={item.skuId}>
                        <dl>
                      <dt><img src={item.imgUrl} alt=""/></dt>
                      <dd>
                        <p>{item.masterName}</p>
                        <p className="price">{item.price}</p>    
                      </dd>  
                    </dl>
                </div>
            )
        }) 
        )
        
    }
    render(){
        return(
            <div className = "lister">
                <div className="head">
                    <ul>
                        <NavLink to="/" className="fa fa-home" id="home"></NavLink>
                        <NavLink to="/list">鲜花速递</NavLink>
                        <NavLink to="/list" className="fa fa-plus-circle" id="add"></NavLink>
                    </ul>
                </div>
                <div className="nav">
                    <ul>
                    <NavLink to="/list">推荐</NavLink>
                    <NavLink to="/list">销量</NavLink>
                    <NavLink to="/list">价格</NavLink>
                    </ul>
                </div>
                <div className="fixList">
                    
                    {this.showListBox()}
                </div>
            </div>
        )
        
    }
}

export default List;