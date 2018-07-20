import React, { Component } from 'react'
import { ActionSheet } from 'react-weui'

class ServicePhone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: [{
        label: '24小时客服电话',
        onClick: typeof props.onCancel === 'function' ? props.onCancel : () => {},
      }, {
        label: '微信客服中心',
        onClick: typeof props.onCancel === 'function' ? props.onCancel : () => {},
      }],
      onCancel: typeof props.onCancel === 'function' ? props.onCancel : () => {},
      show: typeof props.show === 'boolean' ? props.show : false,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({show: nextProps.show})
  }

  render() {
    return <ActionSheet
      menus={this.state.menus}
      show={this.state.show}
      type="android"
      onRequestClose={this.state.onCancel}
    />
  }
}

export default ServicePhone
