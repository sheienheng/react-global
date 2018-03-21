import React, { Component } from 'react';
import './App.css';
import ReactSwipe from 'react-swipe';
import Home from './page/home'
import Choose from './page/choose'
import Login from './page/login'
import User from './page/user'
import Merchant from './page/merchant'
import Searchs from './page/searchs'
import { connect } from 'react-redux'
import {city,username} from './store/action'
import {BrowserRouter as Router,Route,Link,Redirect,Switch,withRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App" >

          <div>
          <Switch>
              {/*/!*路由配置*!/*/}
              <Route path="/home" exact component={Home}></Route>
              <Route path="/choose" exact component={Choose}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/user" exact component={User}></Route>
              <Route path="/merchant" exact component={Merchant}></Route>
              <Route path="/searchs" exact component={Searchs}></Route>
              {/*/!*重定向*!/*/}
              <Redirect to={{pathname:'/home',state:{from:'/'}}}></Redirect>
          </Switch>
          </div>
      </div>
      </Router>
    );
  }
    componentWillMount(){
        console.log(this.props)
        this.props.dispatch(city('北京'))
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

export default connect(select)(App);
