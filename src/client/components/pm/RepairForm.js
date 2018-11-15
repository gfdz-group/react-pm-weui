import React, { Component } from 'react'
import {
	Page,
	Form,
	FormCell,
	CellsTitle,
	CellHeader,
	CellBody,
	Label,
	Input,
	CityPicker,
  TextArea,
  ButtonArea,
  Button
} from 'react-weui'
import RoomPicker from './RoomPicker'
import ImageUploader from '../ImageUploader'

const repairTypeOpts = [{
	name: '公共区域报修',
	code: 1,
	sub: [{
		name: '单元门',
		code: 1
	}, {
		name: '防火门',
		code: 2
	}]
}, {
	name: '房屋报修',
	code: 2,
	sub: [{
		name: '马桶坐厕疏通',
		code: 1
	}, {
		name: '渗水(墙体/地面/顶部)',
		code: 2
	}, {
		name: '跳闸/其他电路检测',
		code: 3
	}]
}]

class RepairForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			repairTypeOpts: repairTypeOpts,
      repairTypeStr: '',
      repairTypeShow: false,
      repairContent: '',

			handlePickerChange: this.handlePickerChange.bind(this)
		}
	}

	handlePickerChange(selected, property = 'room') {
		/** vars */
		let optsVar = `${property}Opts`
		let labelVar = `${property}Label`
		let idVar = `${property}Id`
		let showVar = `${property}PickerShow`

		let label, value = ''
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

	render() {
		return (
			<Page>
				<CellsTitle>物业报修</CellsTitle>
				<Form>
          <RoomPicker />
          {/** repair type */}
          <FormCell>
            <CellHeader>
              <Label>物业报修</Label>
            </CellHeader>
            <CellBody>
              <Input
                type="text"
                placeholder="请选择报修类别"
                value={this.state.repairTypeStr}
                onClick={(evt) => {
                  evt.preventDefault()
                  this.setState({repairTypeShow: true})
                }}
              />
            </CellBody>
          </FormCell>
          {/** repair photos */}
          <ImageUploader />
          {/** repair content */}
          <FormCell>
            <CellBody>
              <TextArea value={this.state.repairContent}
                placeholder="报修内容和投诉建议"
                onChange={(evt) => this.setState({repairContent: evt.target.value})} />
            </CellBody>
          </FormCell>
          {/** save button */}
          <ButtonArea>
            <Button onClick={() => { console.log(this.state.repairContent) }}>提交</Button>
          </ButtonArea>
					{/** repair types picker */}
					<CityPicker
						data={this.state.repairTypeOpts}
            show={this.state.repairTypeShow}
            onCancel={() => this.setState({repairTypeShow: false})}
						onChange={text => {
							this.setState({repairTypeStr: text, repairTypeShow: false});
						}}
					/>
				</Form>
			</Page>
		)
	}
}

export default RepairForm
