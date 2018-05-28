import React,{Component} from "react"

import store from "../../../store/index"

import actionCreator from "../../../store/actionCreator"

import Banner from "../commons/banner/index"

import Header from  "../commons/header/index" 

import Variety from "./variety/index"

import Main from "./main/index"

import Img from "./img/index"

import Shopping from "./shopping/index"

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            num : store.getState().num
        }
        store.subscribe(()=>{
            this.setState({num : store.getState().num})
        })
    }
        
    render(){
        return(
            <div className ="home">
                    <Header/>
                    <Banner/>
                    <Variety/>
                    <Img/>
                    <Main/>
                    <Shopping/>
                {/* <div>{this.state.num}</div>
                <div><button onClick = {actionCreator.addNum}>+</button><button>-</button></div> */}
            </div>
        )
        
    }
}
export default Home