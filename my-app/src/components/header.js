import React, {Component} from 'react';
import {Link} from 'react-router-dom'
//定义一个类 继承 另一个类
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mes: 'uhiksdejci'
        }
    }

    render() {
        return (
            <div className="Header">
                <Link to={'#'}>
                    <i className="icon-chevron-left"></i>
                </Link>
                <h1>选择城市</h1>
            </div>
        )
    }
}

export default Header