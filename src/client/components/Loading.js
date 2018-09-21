import React, { Component } from 'react'
import { Toast } from 'react-weui'

export default class Loading extends Component {
  render() {
    return <Toast icon="loading" show={this.props.show}>请稍等...</Toast>
  }
}
