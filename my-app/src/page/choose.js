import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import '../static/css/choose.css'
import { connect } from 'react-redux'
import {city,username} from '../store/action'
//定义一个类 继承 另一个类
class Choose extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city:'',
            username:''
        }
    }
    select(e){
        // console.log(e.target.innerHTML)
        this.props.dispatch(city(e.target.innerHTML))
        this.props.history.push('/home')
    }
    render() {
        return (
            <Router>
            <div className="Choose">
                <div className="Header">
                    <a href={'#'} onClick={()=>{
                        this.props.history.go(-1)
                    }}>
                        <i className="icon-chevron-left"></i>
                    </a>
                    <h1>选择城市</h1>
                </div>
                <div className="city">
                    <h1>{this.props.city}</h1>
                </div>
                <div className="cityList">
                    <h2>热门城市</h2>
                    <ul>
                        <li><span onClick={this.select.bind(this)}>北京</span></li>
                        <li><span onClick={this.select.bind(this)}>上海</span></li>
                        <li><span onClick={this.select.bind(this)}>杭州</span></li>
                        <li><span onClick={this.select.bind(this)}>广州</span></li>
                        <li><span onClick={this.select.bind(this)}>苏州</span></li>
                        <li><span onClick={this.select.bind(this)}>深圳</span></li>
                        <li><span onClick={this.select.bind(this)}>南京</span></li>
                        <li><span onClick={this.select.bind(this)}>天津</span></li>
                        <li><span onClick={this.select.bind(this)}>重庆</span></li>
                        <li><span onClick={this.select.bind(this)}>厦门</span></li>
                        <li><span onClick={this.select.bind(this)}>武汉</span></li>
                        <li><span onClick={this.select.bind(this)}>西安</span></li>
                    </ul>
                </div>
            </div>
            </Router>
        )
    }
}
function select(state) {
    //全局状态
    console.log(state)
    return {
        city:state.city,
        username:state.username
    }
}
export default connect(select)(Choose)