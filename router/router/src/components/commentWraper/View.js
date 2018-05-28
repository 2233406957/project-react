import React ,{Component} from "react"
import { Row, Col } from 'antd'
import "./style.css"
export default class CommentWraper extends Component {
    render(){
        return (<div>
            <Row>
            <Col span={6}><img className="commen-log" src={require('../../static/imgs/newlogo.png')}/></Col>
            <Col span={18}></Col>
          </Row>
          </div>)
    }
}