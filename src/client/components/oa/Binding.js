import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Page,
  CellsTitle,
  Form,
  FormCell,
  CellHeader,
  CellBody,
  Label,
  Input,
  ButtonArea,
  Button,
} from 'react-weui'
import AuthService from '../../components/auth/AuthService'

class Binding extends Component {
  constructor() {
    super()
    this.state = {
      phone: '',
      password: '',
    }
    this.auth = new AuthService()
    this.handleBind = this.handleBind.bind(this)
  }

  handleBind() {
    const { router } = this.context
    const { history } = router

    this.auth.fetch('/api/home/userBinding.do', {
      method: 'POST',
      body:JSON.stringify(this.state)
    }).then(res => {
      const { code, msg } = res
      if (code === -1) {
        alert(msg)
        return
      }
      history.push('/oa')
    })
  }

  render() {
    const { phone, password } = this.state
    return (
      <Page className="admin-binding" ptr={false} infiniteLoader={false}>
        <CellsTitle>管理员绑定</CellsTitle>
        <Form>
          <FormCell>
            <CellHeader>
              <Label>手机号</Label>
            </CellHeader>
            <CellBody>
              <Input
                type="text"
                placeholder="请填入手机号"
                value={phone}
                onChange={(evt) => { this.setState({phone: evt.target.value}) }}
              />
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>密码</Label>
            </CellHeader>
            <CellBody>
              <Input
                type="password"
                placeholder="请输入密码"
                value={password}
                onChange={(evt) => { this.setState({password: evt.target.value}) }}
              />
            </CellBody>
          </FormCell>
        </Form>
        <ButtonArea>
          <Button onClick={this.handleBind}>绑定</Button>
        </ButtonArea>
      </Page>
    )
  }
}

Binding.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default Binding;
