import React, {Component} from 'react';
import '../static/css/login.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {city,username} from '../store/action'
//定义一个类 继承 另一个类
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city:'',
            username:''
        }
    }

    render() {
        return (
            <div className="Login">
                <div className="Header">
                    <a onClick={()=>{
                        this.props.history.go(-1)
                    }}>
                        <i className="icon-chevron-left"></i>
                    </a>
                    <h1>登录</h1>
                </div>
                <div className="inputs">
                    <div>
                        <i className="icon-tablet"></i>
                        <input type="text" ref={'username'} placeholder={'输入手机号'}/>
                    </div>
                    <div>
                        <i className="icon-key"></i>
                        <input type="text" placeholder={'输入验证码'}/>
                        <span>发送验证码</span>
                    </div>
                    <button className="btn" onClick={()=>{
                        // console.log(this.refs.username.value)
                        if(this.refs.username.value){
                            this.props.dispatch(username(this.refs.username.value))
                            this.props.history.push('/user')
                        }
                    }}>登录</button>
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
export default connect(select)(Login)