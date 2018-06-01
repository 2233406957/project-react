import "./index.scss"

import React,{Component} from "react"

import axios from "axios"

import Swiper from "swiper"

class Banner extends Component {
    constructor(props){
        super(props)
        this.state = {
            banner :[]
        }
        this.ismounted = true
    }
    componentWillUnmount(){
        this.ismounted = false;
    }
    getBanner(){
        axios.get("/mz/v4/api/billboard/home",{
            params :{__t:Date.now()}
        }).then(res=>{
            if(!this.ismounted) return  false;
            this.setState({
                banner :res.data.data.billboards
            })
            setTimeout(()=>{
                new Swiper(this.el, {
                    pagination: {el: '.swiper-pagination'},
                    loop: true,
                    autoplay:true,
                })
            },0)
        })
    }
    sportBanner(){
        let { banner }  = this.state;
        if (!banner) return ""
        return (
            
            <div className="swiper-wrapper">
            {
                banner.map(item=>{
                   return (
                    
                        <div className="swiper-slide" key={item.id}><img src={item.imageUrl} alt=""/></div>
                   
                   )
                   
                    
                   
                })
                }
                
            </div>
        )
    }
    componentWillMount(){
        this.getBanner()
    }
    render(){
        return(
            <div className = "banner">
                <div  ref = {el => this.el = el} className="swiper-container">
                    {this.sportBanner()}
                    <div className="swiper-pagination"></div>
                
                </div>
            </div>
        )
        
        
    }
    // componentDidMount(){
    //     new Swiper(this.el, {
    //         pagination: {el: '.swiper-pagination'},
    //         loop: true,
    //         autoplay:true,
    //     })
    // }
}

export default Banner;