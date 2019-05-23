import React, { Component } from 'react';
import {postRegister} from '../../../network/protocol';
import './register.scss';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info:{
                "login": "",
                "pwd": "",
                "pwd_final":"",
                "email": "",
                "mobile": "",
                "real_name": "",
                "id_card": "",

            },
            infoMap: {
                "email": "邮箱",
                "id_card": "身份证号码",
                "login": "用户名",
                "mobile": "手机号",
                "pwd": "密码",
                "real_name": "真实姓名",
                "pwd_final":"确认密码",
            },
            canPost:false
        }
      }
      _setValue= (type,e) => {
        let info = this.state.info;
        info[type] = e.target.value;
        this.setState({info},()=>{
        })
      }
      _register = () => {
        let {info,infoMap,canPost} = this.state;
        if(!canPost) {
            if(info['pwd_final'] !== info['pwd']) {
                this._showInfo('两次密码不一致！');
                return false;
            }
            for (let k in info) {
                if(info[k] == '') {
                    this._showInfo('请输入'+infoMap[k]+'!');
                    return
                } else {
                    if(k == 'mobile') {
                        if(!/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(info[k])) {
                            this._showInfo('请输入正确格式的'+infoMap[k]+'!');
                            return
                        }
                    } else if(k == 'real_name') {
                        if(!/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(info[k])) {
                            this._showInfo('请输入正确格式的'+infoMap[k]+'!');
                            return
                        }
                    } else if(k == 'id_card') {
                        if(!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(info[k])) {
                            this._showInfo('请输入正确格式的'+infoMap[k]+'!');
                            return
                        }
                    }
                }
            }
            return false;
        } else {
            console.log(info);
            delete info.pwd_final;
            postRegister(info).then(
                res => {
                    this._showInfo('注册成功！');
                },
                err => {
                    this._showInfo('注册失败！');
                }
            )
        }

      }
      _checkValue = (type, typename, reg) => {
        let info = this.state.info;
        if(type == 'pwd_final') {
            if(info[type] !== info['pwd']) {
                this._showInfo('两次密码不一致！');
                this.setState({canPost:false});
            }
        }
        if(info[type] == '') {
            this._showInfo('请输入' + typename + ' !');
            this.setState({canPost:false});
        } else {
            if(reg) {
                if(!reg.test(info[type])) {
                    this._showInfo('请输入正确格式的' + typename + ' !');
                    this.setState({canPost:false});
                } else {
                    let can = Object.keys(info).some((key)=> info[key] == '');
                    if(!can) {
                        this.setState({canPost:true});
                    }
                }
            } else {
                let can = Object.keys(info).some((key)=> info[key] == '');
                if(!can) {
                    this.setState({canPost:true});
                }
            }

        }
      }
      _showInfo = (info) => {
        alert(info)
      }
      render() {
        return (
            <div className="registerContent">
                <div className="loginDetail">
                    <div className="userName">
                        <p>用户名</p>
                        <input type="text" value={this.state.real_name} 
                        onChange={(e)=>{this._setValue('login',e)}} onBlur={(e)=>{this._checkValue('login','用户名',)}}/>
                    </div>
                    <div className="password">
                        <p>设置密码</p>
                        <input type="text" value={this.state.pwd}
                         onChange={(e)=>{this._setValue('pwd',e)}}  onBlur={(e)=>{this._checkValue('pwd','密码')}}/>
                    </div>
                    <div className="password">
                        <p>确认密码</p>
                        <input type="text" value={this.state.pwd_final} 
                        onChange={(e)=>{this._setValue('pwd_final',e)}}  onBlur={(e)=>{this._checkValue('pwd_final','确认密码')}}/>
                    </div>
                    <div className="password">
                        <p>电子邮箱</p>
                        <input type="text" value={this.state.email} 
                        onChange={(e)=>{this._setValue('email',e)}} onBlur={(e)=>{this._checkValue('email','电子邮箱')}}/>
                    </div>
                    <div className="password">
                        <p>手机号</p>
                        <input type="text" value={this.state.mobile} 
                        onChange={(e)=>{this._setValue('mobile',e)}}  onBlur={(e)=>{this._checkValue('mobile','手机号',/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/)}}/>
                    </div>
                    <div className="password">
                        <p>真实姓名</p>
                        <input type="text" value={this.state.real_name}
                         onChange={(e)=>{this._setValue('real_name',e)}} onBlur={(e)=>{this._checkValue('real_name','真实姓名', /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/)}}/>
                    </div>
                    <div className="password">
                        <p>身份证号码</p>
                        <input type="text"value={this.state.id_card} 
                        onChange={(e)=>{this._setValue('id_card',e)}}  onBlur={(e)=>{this._checkValue('id_card','身份证号码',/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)}}/>
                    </div>
                    <button className="loginBtn" onClick={this._register}>注册</button>
                
                </div>
            </div>
        );
      }

}
