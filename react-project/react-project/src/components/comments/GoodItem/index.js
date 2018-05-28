import React ,{Component} from 'react'

import './index.scss'

class Gooditem extends Component{
    render (){
        return (
            <div className='item'>
                <div className="good-item">
                        <div className="img-box img-loading">
                            <img width="100%" src="https://pic.maizuo.com/usr/movie/02799a89bdbb638fc3f5f4ee6e35bc98.jpg" alt=""/>
                        </div>
                         <div className="name">爱仕达大所大所大所大所多</div>
                         <div className="content"><span className="price">￥68</span><span className="inventory">撒大大说</span></div>
                    </div>
            </div>
        )
    }
}
export default Gooditem