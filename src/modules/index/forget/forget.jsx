import React, { Component } from 'react';
import {postLoginCode,postValidLoginCode} from '../../../network/protocol';
import './forget.scss';

export default class Forgrt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                mobile:'',
                code:'',
                pwd:'',
                pwd_final:''
            },
            infoMap:{
                mobile:'手机号',
                code:'验证码',
                pwd:'密码',
                pwd_final:'重复密码'
            }
        }
      }
      _getLoginCode = () => {
        let {info} = this.state;
        if(info.mobile) {
            postLoginCode(info.mobile).then(
                res => {//5432
                }
            )
        }
      }
      _setValue = (type,e) =>{
          let {info} = this.state;
          let value = e.target.value;
          info[type] = value;
          this.setState({info})

      }
      _login = () => {
        let {info,infoMap} = this.state;
        for(let k in info) {
            if(info[k] == '') {
                alert('请输入'+infoMap[k]+'!');
                return
            }
        }
        if(info['pwd'] !== info['pwd_final']) {
            alert('两次输入不一致');
            return false;
        }
        postValidLoginCode(info.mobile, info.code, info.pwd).then(
            res => {
                this.props.history.push('/login');
            },
            err => {
                if(err.code == 406) {
                    alert('验证码错误！');
                }
            }
        )
      }
      render() {
        return (
            <div className="forgetContent">
                <div className="loginDetail">
                    <div className="phone">
                        <p>手机号</p>
                        <div>
                            <input type="text" value={this.state.info.mobile} onChange={(e)=>{this._setValue('mobile',e)}}/>
                            <button onClick={this._getLoginCode}>发送验证码</button>
                        </div>
                    </div>
                    <div className="password">
                        <p>验证码</p>
                        <input type="text" value={this.state.info.code} onChange={(e)=>{this._setValue('code',e)}}/>
                    </div>
                    <div className="password">
                        <p>新密码</p>
                        <input type="text" value={this.state.info.pwd} onChange={(e)=>{this._setValue('pwd',e)}}/>
                    </div>
                    <div className="password">
                        <p>重复密码</p>
                        <input type="text" value={this.state.info.pwd_final} onChange={(e)=>{this._setValue('pwd_final',e)}}/>
                    </div>
                    <button className="loginBtn" onClick={this._login}>登录</button>
                    {/* <div className="register">
                        <p>注册新账号</p>
                        <p>忘记密码</p>
                    </div> */}
                </div>
            </div>
        );
      }

}
