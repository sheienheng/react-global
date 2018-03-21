import React, {Component} from 'react';
import '../static/css/user.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {city,username} from '../store/action'
//定义一个类 继承 另一个类
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city:'',
            username:''
        }
    }

    render() {
        return (
            <div className="User">
                <div className="Header">
                    <a onClick={()=>{
                        this.props.history.push('/home')
                    }}>
                        <i className="icon-chevron-left"></i>
                    </a>
                    <h1>主页</h1>
                </div>
                <div className='user'>
                    <p><i className="icon-user"></i>{this.props.username}</p>
                    <p><i className="icon-map-marker"></i> {this.props.city}</p>
                </div>
                <div className="interval"></div>
                <div className="order">
                    <h3>你的订单</h3>
                    <div>
                        <div className="orderlist">
                            <div><img src={ require('../static/img/img1.png')} alt=""/></div>
                            <div className='orderMes'>
                                <p>商户：汉堡大王</p>
                                <p>数量：3</p>
                                <p>价格：￥88</p>
                            </div>
                            <span className='pingbtn'>评价</span>
                        </div>
                        <div className="orderlist">
                            <div><img src={ require('../static/img/img1.png')} alt=""/></div>
                            <div className='orderMes'>
                                <p>商户：汉堡大王</p>
                                <p>数量：3</p>
                                <p>价格：￥88</p>
                            </div>
                            <span className='pingbtn'>评价</span>
                        </div>
                        <div className="orderlist">
                            <div><img src={ require('../static/img/img1.png')} alt=""/></div>
                            <div className='orderMes'>
                                <p>商户：汉堡大王</p>
                                <p>数量：3</p>
                                <p>价格：￥88</p>
                            </div>
                            <span className='pingbtn'>评价</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
function select(state) {
    console.log(state)
    return {
        city:state.city,
        username:state.username
    }
}
export default connect(select)(User)