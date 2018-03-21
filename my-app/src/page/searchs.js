import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../static/css/searchs.css'
//定义一个类 继承 另一个类
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mes: ''
        }
    }

    render() {
        return (
            <div className="Search">
                <div className="HomeHead">
                    <span onClick={()=>{
                        this.props.history.go(-1)
                    }}>
                        <i className="icon-chevron-left"></i>
                    </span>
                    <div className="head-input">
                        <i className="icon-search"></i>
                        <input type="text" placeholder={"请输入关键字"} />
                    </div>
                </div>
                <ul className="search-list">
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
        )
    }
}

export default Search