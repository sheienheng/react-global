import React, {Component} from 'react';
import '../static/css/merchant.css'
import { connect } from 'react-redux'
import {city,username} from '../store/action'
//定义一个类 继承 另一个类
class Merchant extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city:'',
            username:'',
            color:false
        }
    }

    render() {
        return (
            <div className="Merchant">
                <div className="Header">
                    <a onClick={()=>{
                        this.props.history.go(-1)
                    }}>
                        <i className="icon-chevron-left"></i>
                    </a>
                    <h1>商户详情</h1>
                </div>
                <div className="merHome">
                    <div className="merShow">
                        <div><img src={require('../static/img/img1.png')} alt=""/></div>
                        <div>
                            <h1>天下第一锅</h1>
                            <div className="starts">
                                <div className="start">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </div>
                                <span>￥88</span>
                            </div>
                            <p><span>重庆 & 四川 麻辣火锅</span></p>
                        </div>
                    </div>
                    <p>
                        营业时间 11:00 - 21:00<br/>
                        电话订购 11:00 - 21:00<br/>
                        网络订购 11:00 - 21:00<br/>
                    </p>
                    <div className="collect">
                        <div>
                            <button className={this.state.color===true?'colorRed':''} onClick={()=>{
                                this.setState({
                                    color:!this.state.color
                                })
                            }}>收藏</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                if(this.props.username != ''){
                                    this.props.history.push('/user')
                                }else {
                                    this.props.history.push('/login')
                                }
                            }}>购买</button>
                        </div>
                    </div>
                </div>
                <div className="interval"></div>
                <div className="evaluate">
                    <h2>用户点评</h2>
                    <div className='appraise'>
                        <div className='app-Mes'>
                            <div>
                                <h3><i className="icon-user"></i>133****9999</h3>
                            </div>
                            <div className="start">
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                            </div>
                            <p>非常好吃，棒棒的，下次再来</p>
                        </div>
                        <div className='app-Mes'>
                            <div>
                                <h3><i className="icon-user"></i>133****9999</h3>
                            </div>
                            <div className="start">
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                            </div>
                            <p>非常好吃，棒棒的，下次再来</p>
                        </div>
                        <div className='app-Mes'>
                            <div>
                                <h3><i className="icon-user"></i>133****9999</h3>
                            </div>
                            <div className="start">
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                            </div>
                            <p>非常好吃，棒棒的，下次再来</p>
                        </div>
                        <div className='app-Mes'>
                            <div>
                                <h3><i className="icon-user"></i>133****9999</h3>
                            </div>
                            <div className="start">
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                            </div>
                            <p>非常好吃，棒棒的，下次再来</p>
                        </div>
                        <div className='app-Mes'>
                            <div>
                                <h3><i className="icon-user"></i>133****9999</h3>
                            </div>
                            <div className="start">
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                            </div>
                            <p>非常好吃，棒棒的，下次再来</p>
                        </div>
                    </div>

                </div>
            </div>
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
export default connect(select)(Merchant)