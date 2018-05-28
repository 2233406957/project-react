import React ,{Component} from 'react'

import './index.scss'

import Gooditem from "../../../comments/GoodItem/index"

import axios from "axios"

class Goodbox extends Component{
    constructor(props){
        super(props)
        this.state = {
            goods:[]
        }
    }
    renderItem(){
        let {goods} = this.state
        if(!goods.length) return "";
        return (<div className="goodmap">
            {
                goods.map(item=>{
                    return ( <Gooditem data={item} key={item.id}/>
                        )
                })
            }
        </div>)
    }
    getGoods(){
        axios.get('/mz/v4/api/film/now-playing?__t=1527155706800&page=1&count=5').then(({data})=>{
            console.log(data.data.films)
            this.setState({goods:data.data.films})
        })
    }
    componentWillMount(){
        this.getGoods()
    }
    render (){
        return (
            <div className='good-box'>
                <div className="title">-&nbsp;好货精选&nbsp;-</div>
                <div className="good-content">
                   {this.renderItem()}
                    </div>
            </div>
        )
    }
}
export default Goodbox