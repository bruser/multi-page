import React, { Component } from 'react';
import './family.scss';
export default class Deposit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textType: 'one'
        }
    }
    _setTextType = (type) => {
        this.setState({textType:type});
    }
    _renderContentLeft = () => {
        return (
            <div className="ContentLeft" key={'ContentLeft'}>
                <img src={require('../../../images/banner.png')} alt="" />
                <div className="textKinds">
                    <div className={`textKindsItem ${this.state.textType=='one'?'activeKinds':''}`} onClick={() => { this._setTextType('one') }}>系统介绍</div>
                    <div className={`textKindsItem ${this.state.textType=='two'?'activeKinds':''}`} onClick={() => { this._setTextType('two') }}>申请流程</div>
                    <div className={`textKindsItem ${this.state.textType=='three'?'activeKinds':''}`} onClick={() => { this._setTextType('three') }}>服务咨询</div>
                </div>
                {this._renderTextOne()}
                {this._renderTextTwo()}
                {this._renderTextThree()}
            </div>
        )
    }
    _renderTextOne = () => {
        if(this.state.textType !== 'one') return null
        return (
            <div className="textKindsOne">
                <div className="text1">
                    <p>
                        “网络游戏未成年人家长监护工程”是一项由上海网映信息科技有限公司根据国家有关规定而发起的一个项目，
                         由中华人民共和国文化部指导，旨在加强家长对未成年人参与网络游戏的监护，引导未成年人健康、
                         绿色参与网络游戏，和谐家庭关系的社会性公益行动。它提供了一种切实可行的方法，一种家长实施监控的管道 ，
                         使家长纠正部分未成年子女沉迷游戏的行为成为可能。该项社会公益行动充分反映了中国网络游戏行业高度的
                         社会责任感，对未成年玩家合法权益的关注及对用实际行动营造和谐社会的愿望。
            </p>
                </div>
                <div className="text2">
                    <h3>《未成年人健康参与网络提示》</h3>
                    <p className="text2Title">
                        随着网络在青少年中的普及，未成年人接触网络游戏已经成为普遍现象。为保护未成年人健康参与游戏，在政府进一步加强行业管理的前提下，
                        家长也应当加强监护引导。为此，我们为未成年人参与网络游戏提供以下意见：
            </p>
                    <p>一、主动控制游戏时间。游戏只是学习、生活的调剂，要积极参与线下的各类活动，并让父母了解自己在网络游戏中的行为和体验。</p>
                    <p>二、不参与可能耗费较多时间的游戏设置。不玩大型角色扮演类游戏，不玩有PK类设置的游戏。在校学生每周玩游戏不超过2小时，每月在游戏中的花费不超过10元。</p>
                    <p>三、不要将游戏当作精神寄托。尤其在现实生活中遇到压力和挫折时，应多与家人朋友交流倾诉，不要只依靠游戏来缓解压力。</p>
                    <p>四、养成积极健康的游戏心态。克服攀比、炫耀、仇恨和报复等心理，避免形成欺凌弱小、抢劫他人等不良网络行为习惯。</p>
                    <p>五、注意保护个人信息。包括个人家庭、朋友身份信息，家庭、学校、单位地址，电话号码等，防范网络陷阱和网络犯罪。</p>
                </div>
                <div className="text3">
                    <h3>《家长监护服务说明：》</h3>
                    <p>
                        家长监护系统充分考虑家长的实际需求，当家长发现自己的孩子玩游戏过于沉迷的时候，由家长提供合法的监护人资质证明、游戏名称账号、以及家长对于限制强度的愿望等信息，可对处于孩子游戏沉迷状态的账号采取几种限制措施，
                        解决未成年人沉迷游戏的不良现象 ，如限制未成年人每天玩游戏的时间区间和长度，也可以限制只有节假日才可以游戏，或者完全禁止。
            </p>
                </div>
                <div className="text3">
                    <h3>《家长监护服务进度查询：》</h3>
                    <p>
                        如果您已经申请家长监护服务，在服务期间，当您对需要提交的信息、处理结果有疑问，或者其他任何问题，您均可以在工作时间联系我们，我们将由专门负责的受理专员为您提供咨询解答服务，或者配合、指导您解决问题。
        </p>
                </div>
            </div>
        )
    }

    _renderTextTwo = () => {
        if(this.state.textType !== 'two') return null
        return (
            <div className="textKindsTwo">
            <img src={require('../../../images/liucheng.png')} alt="" />
            <p className="textKindsTwo_1">
                “网络游戏未成年人家长监护工程”是一项由上海梦之国网络科技有限公司根据国家有关规定而发起的一个项目，由中华人民共和国文化部指导，旨在加强家长对未成年人参与网络游戏的监护，引导未成年人健康、绿色参与网络游戏，和谐家庭关系的社会性公益行动。它提供了一种切实可行的方法，一种家长实施监控的管道，使家长纠正部分未成年子女沉迷游戏的行为成为可能。该项社会公益行动充分反映了中国网络游戏行业高度的社会责任感，
              对未成年玩家合法权益的关注及对用实际行动营造和谐社会的愿望。
            </p>
            <p className="textKindsTwo_2">具体实施细则如下：</p>
            <div className="textKindsTwo_3">
                <h4>申请条件：</h4>
                <p>1、申请人需为被监护未成年人的法定监护人；</p>
                <p>2、申请人的被监护人年龄小于18周岁；</p>
                <p>3、申请人需为大陆公民，不含港、澳、台人士。</p>
            </div>
            <div className="textKindsTwo_3">
                <h4>申请需提交材料（点击下载申请表格）：</h4>
                <p>1、监护人信息表（包含监护人的身份证明复印件）；</p>
                <p>2、被监护人信息表（包含被监护人所玩游戏相关信息及身份证明复印件）；</p>
                <p>3、填写网络游戏未成年人家长监护申请书、保证书、授权书并手工签字（需下载，填写并打印，签字）；</p>
                <p>4、申请人与被监护人的监护关系证明文件（户口簿或有关机关出具的证明文件）。</p>
            </div>
            <div className="textKindsTwo_3">
                <h4>申请方式：</h4>
                <p>1.电话服务监护人可以通过来专线电话来咨询，电话：13391186446 。</p>
                <p>2.邮寄服务监护人可以通过邮寄提交相关信息，邮寄地址：上海市嘉定区南翔镇静塘路988号2幢JT914室 </p>
            </div>
            <div className="textKindsTwo_3">
                <h4>其他要求：</h4>
                <p>1.申请人应提交较完备的申请材料，对未提供的信息要及时补充；可请熟知电脑、互联网、游戏的人员进行协助，以便提供详实资料；。</p>
                <p>2.申请人应保证提交的信息真实有效；对于提供虚假信息或伪造证件，我司将保留进一步追究法律责任的权利。</p>
            </div>
            <div className="textKindsTwo_3">
                <h4>监督方式：</h4>
                <p>封停账号 </p>
                <p>根据监护人意愿封停被监护人账号。直至被监护人年满18周岁，并提出申请。</p>
            </div>
        </div>
        )
    }

    _renderTextThree = () => {
        if(this.state.textType !== 'three') return null
        return (
            <div className="textKindsThree">
            <div className="textKindsThree_1">
                <h4>Q1：“网络游戏未成年人家长监护机制工程”是什么？ </h4>
                <p>
                    “网络游戏未成年人家长监护工程”是一项由上海网映信息科技有限公司根据国家有关规定而发起的一个项目，由中华人民共和国文化部指导，旨在加强家长对未成年人参与网络游戏的监护，引导未成年人健康、绿色参与网络游戏，和谐家庭关系的社会性公益行动。它提供了一种切实可行的方法，一种家长实施监控的管道，
                    使家长纠正部分未成年子女沉迷游戏的行为成为可能。该项社会公益行动充分反映了中国网络游戏行业高度的社会责任感，对未成年玩家合法权益的关注及对用实际行动营造和谐社会的愿望。
                </p>
            </div>
            <div className="textKindsThree_1">
                <h4>Q2：什么情况下需要申请该项服务呢？ </h4>
                <p>
                    在监护人发现被监护人有沉溺游戏的情况下，监护人可向上海梦之国网络科技有限公司公司申请发起未成年人家长监护机制。
                </p>
            </div>
            <div className="textKindsThree_1">
                <h4>Q3：申请该项服务时需要提交哪些资料呢？如何提交呢？ </h4>
                <p>
                    申请人需通过邮寄方式向我司提交《上海梦之国网络科技有限公司未成年人用户家长监控服务申请书》及其中所提及需提供的附件，包含：
                </p>
                <p>附件1：申请人的身份证或户口本（复印件）</p>
                <p>附件2：被申请人的身份证或户口本（复印件）</p>
                <p>附件3：申请人与被申请人的监护法律关系证明（原件）</p>
                <p>您在填写《上海梦之国网络科技有限公司未成年人用户家长监控服务申请书》时，请提供尽可能详尽、真实的玩家资料，以便帐号归属的判定。</p>
            </div>
            <div className="textKindsThree_1">
                <h4>Q4：相关资料寄往哪里呢？</h4>
                <p>请将相关资料邮寄至：（请在信封表面写上“家长监控服务申请书”的字样）</p>
                <p>联系人：刘先生</p>
                <p>地 址：上海市静安区灵石路658号501</p>
                <p>联系方式：13391186446</p>
            </div>
            <div className="textKindsThree_1">
                <h4>Q5：提交资料后，后续处理流程怎样呢？</h4>
                <p>您提交相关申请资料后，我司客服人员将按照监护申请流程尽快处理您的申请，处理过程中可能需要对监护人和被监护人进行电话回访以便信息的判定，希望您的配合。</p>
            </div>
            <div className="textKindsThree_1">
                <h4>Q6：判定帐号归属需要多久呢？ </h4>
                <p>1. 在判断申请材料完整的情况下，我司将联系疑似账号归属者，告知其在 15 个工作日内将按照监护人需求对其账号进行相关操作，并要求疑似账号归属者提供身份材料以便我司判定其与监护人监护关系；</p>
                <p>2. 若疑似账号归属者在 15 个工作日内不能提供有效身份证明或逾期提供，则默认为疑似账号归属者与被监护人身份相符。我司即按照监护人申请要求，对其游戏账号纳入防沉迷系统； </p>
                <p>3. 若疑似账号归属者在 15 个工作日内提供的身份证明与被监护人相符，我司即按照监护人申请要求，对其游戏账号纳入防沉迷系统； </p>
                <p>4. 若疑似账号归属者在 15 个工作日内提供的身份证明与被监护人不符，我司则无法判定其与被监护人的身份关系。在此情况下，为保障用户游戏账号安全，我司将通知监护人通过公安机关出具账号找回协查证明，由我司协助被监护人找回游戏账号后再进行后续操作； </p>
            </div>
            <div className="textKindsThree_1">
                <h4>Q7:若发现对帐号归属有疑义或账号被恶意防沉迷限制怎么办？ </h4>
                <p>1. 您需要在收到通知后15个工作日内提供您的身份证复印件（纸质），并通过以下地址邮寄到我司，如果我司在15个工作日内未收到您的身份证复印件，我们会将您的账号纳入家长监控系统。</p>
                <p>收件人：刘超 地 址：上海市静安区灵石路658号501 联系方式：13391186446</p>
            </div>
            <div className="textKindsThree_1">
                <h4>Q8:若发现对帐号归属有疑义或账号被恶意防沉迷限制怎么办？ </h4>
                <p>注1： 请在身份证复印件上写明您的签名以及上海梦之国网络科技有限公司账号。</p>
                <p>注2：请您注意我司提供该项服务不收取任何费用，以免上当受骗。</p>
            </div>
        </div>
        )
    }

    _renderContentRight = () => {
        return (
            <div className="ContentRight" key={'ContentRight'}>
            <div className="family">
                <img src={require('../../../images/family.png')} alt=""/>
            </div>
            <div className="download">
                <img src={require('../../../images/download.png')} alt=""/>
            </div>
            <div className="phone">
                <img src={require('../../../images/phone.png')} alt=""/>
            </div>
            </div>
        )
    }
    render() {
        return (
            <div className="familyContentBox">
                <div className="familyContent">
                    {this._renderContentLeft()}
                    {this._renderContentRight()}
                </div>
            </div>
        );
    }

}
