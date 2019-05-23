import React, { Component } from 'react';
import './issue.scss';
export default class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="IssueBox">
        <div className="IssueBoxContain">
        <h4>交易纠纷</h4>
        <div className="Issuetext1">
          <p >
          上海网映信息科技有限公司在此特别提醒用户：在使用本站前请务必仔细阅读本《交易纠纷处理规定》（未成年人应当在其法定监护人陪同下阅读）中 的各个条款，以确保您在享受本网络游戏服务的同时维护自身合法权益：
          </p>
        </div>

        <div className="Issuetext1">
        <p>《交易纠纷处理规定》</p>
        <p>
            1．上海网映信息科技有限公司仅作为本站内游戏的运营商，如若本站内网络游戏用户之间发生纠纷且无法协商一致的，可向国家相关行政机关或司法机关寻求解决，包括但不限于向公安机关报案、申请仲裁或向人民法院提起诉讼等。本站将会为实名注册用户提供必要的协助和支持，并根据有关行政机关和司法机关的要求承担一定的举证责任或采取必要措施。
        </p>
        <p>
            2．上海网映信息科技有限公司 用户之间发生纠纷的，也可向本站客服人员投诉并举证。用户需提供与其账号注册信息一致的个人有效身份证件、必要的国家行政或司法机关文件和其他本站要求提供的相关证据。经审核确认后，本站可以给予必要的协助和支持。
        </p>
        <p>
            3. 如上海网映信息科技有限公司用户对本站的服务有任何异议的，可以向推首科技客服人员投诉并举证。查证属实的，本站将立即更正并按照现行法律规定给予用户必要的补偿。
        </p>
        </div>
        </div>
      </div>
    );
  }

}
