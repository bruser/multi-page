import React, { Component } from 'react';
import './contact.scss'
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="contactBox">
                <div className="company">
                    <div className="companyT">
                        <p>
                            <span>公司名称：</span>
                            <span>上海网映信息科技有限公司</span>
                        </p>
                        <p>
                            <span>公司邮箱：</span>
                            <span>service@dianjingquan.cn</span>
                        </p>
                        <p>
                            <span>客服QQ：</span>
                            <span>2818202935</span>
                        </p>
                        <p>
                            <span>公司地址：</span>
                            <span>上海市静安区灵石路658号501室</span>
                        </p>
                    </div>
                    <div className="comDetail">
                    上海网映信息科技有限公司（简称网映科技）是一家专注于游戏运营发行，游戏研发，应用软件<br />
                    研发，赛事工具研发等多元化互联网高科技企业。
                </div>
                </div>
 
            </div>
        );
    }

}
