import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import ReactSwipe from 'react-swipe';
import '../static/css/Home.css'
import { connect } from 'react-redux'
import {city,username} from '../store/action'
//定义一个类 继承 另一个类
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city:'',
            username:''
        }
    }

    render() {
        return (
            <div className="Home">
                <div className="HomeHead">
                    <Link to={'/choose'}>
                        {this.props.city}
                        <i className="icon-angle-down"></i>
                    </Link>
                    <div className="head-input">
                        <i className="icon-search"></i>
                        <input type="text" placeholder={"请输入关键字"} onKeyDown={(e)=>{
                            if(e.keyCode === 13){
                                // console.log(this.refs.text.value)
                                this.props.history.push('/searchs')
                            }
                        }}/>
                    </div>
                    <span>
                    <a onClick={()=>{
                        if(this.props.username != ''){
                            this.props.history.push('/user')
                        }else {
                            this.props.history.push('/login')
                        }
                    }}><i className="icon-user"></i></a>
                </span>
                </div>
                <div className="banner">
                    <ReactSwipe className="carousel" swipeOptions={{
                        auto: 2500,
                        callback: function (index) {
                            this.setState({index: index});
                        }.bind(this)}}>
                        <div className="classity">
                            <ul>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/1.png")} alt=""/>
                                    <p>景点</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/2.png")} alt=""/>
                                    <p>KTV</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/3.png")} alt=""/>
                                    <p>购物</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/4.png")} alt=""/>
                                    <p>生活服务</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/5.png")} alt=""/>
                                    <p>健身运动</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/6.png")} alt=""/>
                                    <p>美发</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/7.png")} alt=""/>
                                    <p>亲子</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/8.png")} alt=""/>
                                    <p>小吃快餐</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/9.png")} alt=""/>
                                    <p>自助餐</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/10.png")} alt=""/>
                                    <p>酒吧</p>
                                </li></Link>
                            </ul>
                        </div>
                        <div className="classity">
                            <ul>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/1.png")} alt=""/>
                                    <p>景点</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/2.png")} alt=""/>
                                    <p>KTV</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/3.png")} alt=""/>
                                    <p>购物</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/4.png")} alt=""/>
                                    <p>生活服务</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/5.png")} alt=""/>
                                    <p>健身运动</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/6.png")} alt=""/>
                                    <p>美发</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/7.png")} alt=""/>
                                    <p>亲子</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/8.png")} alt=""/>
                                    <p>小吃快餐</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/9.png")} alt=""/>
                                    <p>自助餐</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/10.png")} alt=""/>
                                    <p>酒吧</p>
                                </li></Link>
                            </ul>
                        </div>
                        <div className="classity">
                            <ul>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/1.png")} alt=""/>
                                    <p>景点</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/2.png")} alt=""/>
                                    <p>KTV</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/3.png")} alt=""/>
                                    <p>购物</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/4.png")} alt=""/>
                                    <p>生活服务</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/5.png")} alt=""/>
                                    <p>健身运动</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/6.png")} alt=""/>
                                    <p>美发</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/7.png")} alt=""/>
                                    <p>亲子</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/8.png")} alt=""/>
                                    <p>小吃快餐</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/9.png")} alt=""/>
                                    <p>自助餐</p>
                                </li></Link>
                                <Link to={'/'}><li>
                                    <img src={require("../static/img/10.png")} alt=""/>
                                    <p>酒吧</p>
                                </li></Link>
                            </ul>
                        </div>
                    </ReactSwipe>
                    <div className="light">
                        <span className={this.state.index === 0 ?'active':''}></span>
                        <span className={this.state.index === 1 ?'active':''}></span>
                        <span className={this.state.index === 2 ?'active':''}></span>
                    </div>
                </div>
                <div className="interval"></div>
                <div className="promotion">
                    <h2>超值特惠</h2>
                    <ul className="container proList">
                        <Link to={'/'}><li>
                            <img src={require("../static/img/t1.png")} alt=""/>
                        </li></Link>
                        <Link to={'/'}><li>
                            <img src={require("../static/img/t2.png")} alt=""/>
                        </li></Link>
                        <Link to={'/'}><li>
                            <img src={require("../static/img/t3.png")} alt=""/>
                        </li></Link>
                        <Link to={'/'}><li>
                            <img src={require("../static/img/t4.png")} alt=""/>
                        </li></Link>
                        <Link to={'/'}><li>
                            <img src={require("../static/img/t5.png")} alt=""/>
                        </li></Link>
                        <Link to={'/'}><li>
                            <img src={require("../static/img/t6.png")} alt=""/>
                        </li></Link>
                    </ul>
                </div>
                <div className="like">
                    <h2>猜你喜欢</h2>
                    <ul className="like-list">
                        <Link to={'/merchant'}>
                            <li>
                                <div className="left">
                                    <img src={require("../static/img/img1.png")} alt=""/>
                                </div>
                                <div className="right">
                                    <div className="right-head">
                                        <h3>汉堡大大</h3>
                                        <span>120m</span>
                                    </div>
                                    <p>叫我汉堡大大，还你多彩口味</p>
                                    <div className="right-foot">
                                        <span>￥28</span>
                                        <span>已售389</span>
                                    </div>
                                </div>
                            </li>
                        </Link>
                        <Link to={'/merchant'}>
                            <li>
                                <div className="left">
                                    <img src={require("../static/img/img1.png")} alt=""/>
                                </div>
                                <div className="right">
                                    <div className="right-head">
                                        <h3>汉堡大大</h3>
                                        <span>120m</span>
                                    </div>
                                    <p>叫我汉堡大大，还你多彩口味</p>
                                    <div className="right-foot">
                                        <span>￥28</span>
                                        <span>已售389</span>
                                    </div>
                                </div>
                            </li>
                        </Link>
                        <Link to={'/merchant'}>
                            <li>
                                <div className="left">
                                    <img src={require("../static/img/img1.png")} alt=""/>
                                </div>
                                <div className="right">
                                    <div className="right-head">
                                        <h3>汉堡大大</h3>
                                        <span>120m</span>
                                    </div>
                                    <p>叫我汉堡大大，还你多彩口味</p>
                                    <div className="right-foot">
                                        <span>￥28</span>
                                        <span>已售389</span>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    </ul>
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
export default connect(select)(Home)