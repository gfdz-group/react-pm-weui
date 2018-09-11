import React, { Component } from 'react'
import AuthService from './AuthService'

export default function withAuth(AuthComponent) {
  const auth = new AuthService()
  return class AuthWrapper extends Component {
    constructor() {
      super()
      this.state = {
        user: null
      }
    }
    componentWillMount() {
      if(!auth.loggedIn()) {
        this.props.history.replace('/login?code=111')
      } else {
        try {
          const profile = auth.getProfile()
          this.setState({ user: profile })
        } catch (err) {
          throw new Error(err)
        }
      }
    }
    render() {
      if(this.state.user) {
        return (<AuthComponent history={this.props.history} user={this.state.profile} />)
      } else {
        return null
      }
    }
  }
}
