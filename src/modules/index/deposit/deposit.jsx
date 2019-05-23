import React, { Component } from 'react';
import './deposit.scss';
export default class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="depositBox">
        <div className="depositBoxContain">
          <div className="depositBoxHead">
            <div className="depositBoxHeadItem">1.选择游戏充值</div>
            <div className="depositBoxHeadItem activedepositBoxHeadItem">2.选择充值方式</div>
            <div className="depositBoxHeadItem activedepositBoxHeadItem">3.选择游戏信息</div>
            <div className="depositBoxHeadItem activedepositBoxHeadItem">4.充值成功</div>
          </div>
          <div className="depositBoxNum">
            <div className="depositBoxNumItem">
              <div className="depositBoxNumItemLeft">
                手机号
              </div>
              <div className="depositBoxNumItemRight">
                <input type="text"/>
              </div>
            </div>
            <div className="depositBoxNumItem">
              <div className="depositBoxNumItemLeft">
                验证码
              </div>
              <div className="depositBoxNumItemRight_1">
                <input type="text"/>
                <button>发送验证码</button>
              </div>
            </div>
            <div className="depositBoxNumItem">
              <div className="depositBoxNumItemLeft">
                新密码
              </div>
              <div className="depositBoxNumItemRight">
                <input type="text"/>
              </div>
            </div>
            <div className="depositBoxNumItem">
              <div className="depositBoxNumItemLeft">
                重复密码
              </div>
              <div className="depositBoxNumItemRight">
                <input type="text"/>
              </div>
            </div>
          </div>
          <div className="depositNow">
            立即充值
          </div>
        </div>

      </div>
    );
  }

}
