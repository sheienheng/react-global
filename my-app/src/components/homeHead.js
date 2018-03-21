import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../static/css/homeHead.css'
//定义一个类 继承 另一个类
class HomeHead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mes: 'HomeHead'
        }
    }

    render() {
        return (
            <div className="HomeHead">
                <Link to={'/choose'}>
                    北京
                    <i className="icon-angle-down"></i>
                </Link>
                <div className="head-input">
                    <i className="icon-search"></i>
                    <input type="text" placeholder={"请输入关键字"} />
                </div>
                <span>
                    <Link to={'/login'}><i className="icon-user"></i></Link>
                </span>
            </div>
        )
    }
}

export default HomeHead