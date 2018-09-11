import React, { Component } from 'react'
import URI from 'urijs'
import AuthService from './AuthService'

const APP_ID = 'wxd71b26449d78607a'

class Login extends Component {
  constructor() {
    super()
    this.auth = new AuthService()
  }

  componentDidMount() {
    const uri = new URI(document.location.href);
    const query = uri.query(true);
    const { code } = query
    if (!Boolean(code)) {
      document.location = this.generateGetCodeUrl(document.location.href);
    } else {
      this.getToken(code);
    }
  }

  componentWillUnmount() {
    if(this.auth.loggedIn()) {
      this.props.history.replace('/')
    }
  }

  getToken(code) {
    this.auth.login(code)
      .then(res => {
        this.props.history.replace('/')
      })
      .catch(err => {
        alert(err)
      })
  }

  generateGetCodeUrl(redirectURL) {
    return new URI('https://open.weixin.qq.com/connect/oauth2/authorize')
      .addQuery("appid", APP_ID)
      .addQuery("redirect_uri", redirectURL)
      .addQuery("response_type", "code")
      .addQuery("scope", "snsapi_base")
      .addQuery("response_type", "code")
      .hash("wechat_redirect")
      .toString();
  }

  render() {
    return <div></div>
  }
}

export default Login
