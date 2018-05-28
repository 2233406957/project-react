import React ,{Component} from 'react'

import "./index.scss"

import Banner from "./Banner/index"

import Goodbox from "./Goodbox/index"

class Home extends Component{
    render (){
        return (
            <div className="home">
                <Banner/>
                <Goodbox/>
            </div>
        )
    }
}
export default Home