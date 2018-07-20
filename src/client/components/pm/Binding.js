import React, { Component } from 'react'
//import axios from 'axios'
import {
  Button,
  ButtonArea,
  Page,
  CellsTitle,
  Form,
  FormCell,
  CellHeader,
  CellBody,
  CellFooter,
  Label,
  Input,
  Picker,
  Select } from 'react-weui'

/** data mocking */
const estateOpts = [{
  items: [
    { label: '都铎城邦', value: 1 },
    { label: '众和康苑', value: 2 },
  ]
}]

const areaOpts = [{
  items: [
    { label: '1号院', value: 1 },
    { label: '2号院', value: 2 },
  ]
}]

const buildingOpts = [{
  items: [
    { label: '1栋', value: 1 },
    { label: '2栋', value: 2 },
  ]
}]

const roomOpts = [{
  items: [
    { label: '1-1-101', value: 1 },
    { label: '1-1-201', value: 2 },
  ]
}]



class Binding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      /** 楼盘 */
      estateOpts: estateOpts,
      estateLabel: '',
      estateId: '',
      estatePickerShow: false,
      /** 片区 */
      areaOpts: areaOpts,
      areaLabel: '',
      areaId: '',
      areaPickerShow: false,
      /** 楼栋 */
      buildingOpts: buildingOpts,
      buildingLabel: '',
      buildingId: '',
      buildingPickerShow: false,
      /** 房号 */
      roomOpts: roomOpts,
      roomLabel: '',
      roomId: '',
      roomPickerShow: false,
      
      owner: null, /** 用户姓名 */
      mobile: null, /** 手机号码 */
      captcha: null, /** 验证码 */

      handlePickerChange: this.handlePickerChange.bind(this)
    }
  }

  handlePickerChange(selected, property='estate') {
    /** vars */
    let optsVar = `${property}Opts`
    let labelVar = `${property}Label`
    let idVar = `${property}Id`
    let showVar = `${property}PickerShow`

    let label,value = ''
    selected.forEach((s, i) => {
      value = this.state[optsVar][i]['items'][s].value
      label = this.state[optsVar][i]['items'][s].label
    })
    this.setState({
      [labelVar]: label,
      [idVar]: value,
      [showVar]: false,
    })
  }

  componentDidMount() {
    return;
    axios.get('/api/wechat/house/getCommunity.do')
      .then(({data}) => {
        const opts = data.map(({id, name}) => ({
          label: name,
          value: id,
        }))
        this.setState({estateOpts: [{ items: opts }]})
      })
  }

  render() {
    return (
      <Page className="picker" title="房源绑定">
        <CellsTitle>房源绑定</CellsTitle>
        <Form>
          {/** estate */}
          <FormCell>
            <CellHeader>
              <Label>楼盘名称</Label>
            </CellHeader>
            <CellBody>
              <Input
                type="text"
                placeholder="请选择楼盘"
                value={this.state.estateLabel}
                onClick={(evt) => {
                  evt.preventDefault()
                  this.setState({estatePickerShow: true});
                }}
                readOnly={true}
              />
            </CellBody>
          </FormCell>
          {/** area */}
          <FormCell>
            <CellHeader>
              <Label>片区名称</Label>
            </CellHeader>
            <CellBody>
              <Input
                type="text"
                placeholder="请选片区"
                value={this.state.areaLabel}
                onClick={(evt) => {
                  evt.preventDefault()
                  this.setState({areaPickerShow: true})
                }}
                readOnly={true}
              />
            </CellBody>
          </FormCell>
          {/** building */}
          <FormCell>
            <CellHeader>
              <Label>楼栋名称</Label>
            </CellHeader>
            <CellBody>
              <Input
                type="text"
                placeholder="请选楼栋"
                value={this.state.buildingLabel}
                onClick={(evt) => {
                  evt.preventDefault()
                  this.setState({buildingPickerShow: true})
                }}
                readOnly={true}
              />
            </CellBody>
          </FormCell>
          {/** Room */}
          <FormCell>
            <CellHeader>
              <Label>房号</Label>
            </CellHeader>
            <CellBody>
              <Input
                type="text"
                placeholder="请选房号"
                value={this.state.roomLabel}
                onClick={(evt) => {
                  evt.preventDefault()
                  this.setState({roomPickerShow: true})
                }}
                readOnly={true}
              />
            </CellBody>
          </FormCell>
          {/** username */}
          <FormCell>
            <CellHeader>
              <Label>用户姓名</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" placeholder="请输入姓名" />
            </CellBody>
          </FormCell>
          {/** mobile */}
          <FormCell>
            <CellHeader>
              <Label>用户姓名</Label>
            </CellHeader>
            <CellBody>
              <Input type="tel" placeholder="请输入手机号码" />
            </CellBody>
          </FormCell>
          {/** captcha */}
          <FormCell vcode>
            <CellHeader>
              <Label>验证码</Label>
            </CellHeader>
            <CellBody>
              <Input type="tel" placeholder="请输入验证码" />
            </CellBody>
            <CellFooter>
              <Button type="vcode">发送</Button>
            </CellFooter>
          </FormCell>
        </Form>
        {/** button */}
        <ButtonArea>
          <Button>绑定</Button>
        </ButtonArea>
        {/** estate picker **/}
        <Picker
          groups={this.state.estateOpts}
          show={this.state.estatePickerShow}
          onCancel={e=>this.setState({estatePickerShow: false})}
          lang={{leftBtn: '取消', rightBtn: '选择'}}
          onChange={selected => {
            this.state.handlePickerChange(selected, 'estate')
          }}
        />
        {/** area picker */}
        <Picker
          groups={this.state.areaOpts}
          show={this.state.areaPickerShow}
          onCancel={e=>this.setState({areaPickerShow: false})}
          lang={{leftBtn: '取消', rightBtn: '选择'}}
          onChange={selected => {
            this.state.handlePickerChange(selected, 'area')
          }}
        />
        {/** building picker */}
        <Picker
          groups={this.state.buildingOpts}
          show={this.state.buildingPickerShow}
          onCancel={e=>this.setState({buildingPickerShow: false})}
          lang={{leftBtn: '取消', rightBtn: '选择'}}
          onChange={selected => {
            this.state.handlePickerChange(selected, 'building')
          }}
        />
        {/** room picker */}
        <Picker
          groups={this.state.roomOpts}
          show={this.state.roomPickerShow}
          onCancel={e=>this.setState({roomPickerShow: false})}
          lang={{leftBtn: '取消', rightBtn: '选择'}}
          onChange={selected => {
            this.state.handlePickerChange(selected, 'room')
          }}
        />
      </Page>
    )
  }
}

export default Binding