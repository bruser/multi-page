import React, { Component } from 'react';
import {postLogin} from '../../../network/protocol';
import './login.scss';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                login:'',
                pwd:''
            }
        }
      }
      _gotoForget = () => {
        this.props.history.push('/forget');
      }
      _gotoRegister = () => {
          this.props.history.push('/register');
      }
      _login = () => {
          let {info} = this.state;
          if(info['login'] == '') {
            this._showInfo('请输入用户名！');
            return
          } else if (info['pwd'] == '') {
            this._showInfo('请输入密码！');
            return
          }
          postLogin(info).then(
              res => {
                let user = res;
                user.status = true;
                localStorage.setItem('user',JSON.stringify(user));
                this._showInfo('登录成功！');
                // this.props.history.push({pathname:'/',state:{showModal:true}});
                localStorage.setItem('showModal','true');
                window.location.href = '/';
              } ,
              err => {
                this._showInfo('登录失败！');
              }
          )
      }
      _showInfo = (info) => {
          alert(info)
      }
      _changeValue = (type,e) => {
          let {info} = this.state;
          let value = e.target.value;
          info[type] = value;
          this.setState({info});
      }
      render() {
        return (
            <div className="loginContent">
                <div className="loginDetail">
                    <div className="userName">
                        <p>用户名</p>
                        <input type="text" value={this.state.info.login} onChange={(e)=>{this._changeValue('login',e)}}/>
                    </div>
                    <div className="password">
                        <p>密码</p>
                        <input type="text" value={this.state.info.pwd} onChange={(e)=>{this._changeValue('pwd',e)}}/>
                    </div>
                    <button onClick={this._login}>登录</button>
                    <div className="register">
                        <p onClick={this._gotoRegister}>注册新账号</p>
                        <p onClick={this._gotoForget}>忘记密码</p>
                    </div>
                </div>
            </div>
        );
      }

}
