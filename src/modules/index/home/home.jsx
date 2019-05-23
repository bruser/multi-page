import React, { Component } from 'react';
import './home.scss'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
      user:null
    }
  }
  _renderBanner = () => {
    return (
        <img src={require('../../../images/home.jpg')} alt=""/>
    )
  }
  componentWillMount() {
    // let showModal = this.props.location.state&&this.props.location.state.showModal;
    let showModal = localStorage.getItem('showModal');
    let user = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      this.setState({ user,showModal })
    }
  }
  render() {
    return (
      <div className="bannerBox">
        {
          this.state.showModal ? 
          <div className="modal">
          <p className="wel">欢迎你</p>
          <p className="user">用户{this.state.user.login}</p>
          <button onClick={()=>{this.setState({showModal:false},()=>{localStorage.removeItem('showModal')})}}>确&nbsp;&nbsp;&nbsp;认</button>
        </div>:null
        }

        {this._renderBanner()}
      </div>
    )
  }

}
