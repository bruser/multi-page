import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Link, Route, NavLink } from 'react-router-dom'
import Deposit from './deposit/deposit';
import Home from './home/home';
import Login from './login/login';
import Contact from './contact/contact';
import Family from './family/family';
import Issue from './issue/issue';
import Protocol from './protocol/protocol';
import Avoid from './avoid/avoid';
import Forget from './forget/forget';
import Register from './register/register';

import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  _loginOut = () => {
    localStorage.setItem('user',null)
    this.setState({user:null})
  }
  _renderNav = () => {
    return (
      <div className="header">
        <div className="header-login">
          <span className="headerTips">适龄提示：本游戏网站适合全年龄段用户</span>
          {
            !this.state.user ?
              <span className="loginBox">
                <NavLink to="/login" className="loginBtn">登录</NavLink>
                <span>|</span>
                <NavLink to="/register" className="logoutBtn">注册</NavLink>
              </span> :
              <span className="loginBox">
                <a  className="loginBtn">{this.state.user.login}</a>
                <span>|</span>
                <a  className="logoutBtn" onClick={this._loginOut}>退出登录</a>
              </span>
          }

        </div>
        <div className="navLink">
          <img className="navLogo" src={require('../../images/logo_header.png')} alt="" />
          <NavLink to="/" exact>首页</NavLink>
          <NavLink to="/deposit" exact>充值中心</NavLink>
          <NavLink to="/contact" exact>联系我们</NavLink>
          <NavLink to="/family" exact>家长监护</NavLink>
        </div>
      </div>
    )
  }
  _renderFooter = () => {
    return (
      <div className="footer">
        <img src={require('../../images/logo_footer.png')} alt="" />
        <div className="footerLink">
          <NavLink to="/protocol" exact>用户协议</NavLink>
          <span>|</span>
          <NavLink to="/avoid" exact>防沉迷系统</NavLink>
          <span>|</span>
          <NavLink to="/issue" exact>交易纠纷处理</NavLink>
          <span>|</span>
          <NavLink to="/contact" exact>联系我们</NavLink>
        </div>
        <div className="footerTips">
          <p>抵制不良游戏，拒绝盗版游戏，注意自我保护，谨防受骗上当</p>
          <p>适当游戏益脑，沉迷游戏伤身，合理安排时间，享受健康生活</p>
        </div>
        <div className="footerAddress">
          <span>上海网映信息科技有限公司</span>
          <span>上海市静安区灵石路658号501室</span>
          <span>联系电话：13391186446</span>
        </div>
        <div className="footerICP">
          <span>沪ICP备15029869-1号</span>
        </div>
      </div>
    )
  }
  componentWillReceiveProps(){
  }
  componentWillMount() {
    let user = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      this.setState({ user })
    }
  }
  componentDidMount(){

  }
  componentDidUpdate(){
  }
  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          {this._renderNav()}
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/family" component={Family} />
          <Route path="/issue" component={Issue} />
          <Route path="/protocol" component={Protocol} />
          <Route path="/avoid" component={Avoid} />
          <Route path="/forget" component={Forget} />
          <Route path="/register" component={Register} />
          <div className="footerLine"></div>
          {this._renderFooter()}
        </HashRouter>
      </div>

    );
  }
}
