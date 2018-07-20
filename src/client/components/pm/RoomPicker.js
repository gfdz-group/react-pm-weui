import React, { Component } from 'react'
import {
  FormCell,
  CellHeader,
  CellBody,
  Label,
  Input,
  Picker
} from 'react-weui'

/** data mocking */
const roomOpts = [{
	items: [{
		label: '都铎城邦 1号院 1-1-604',
		value: 1
	}, {
		label: '都铎城邦 1号院 1-1-603',
		value: 2
	}, ]
}]

class RoomPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomOpts: roomOpts,
      roomLabel: '',
      roomId: '',
      roomPickerShow: false,
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
      <div>
        {/** room number */}
        <FormCell>
          <CellHeader>
            <Label>房号</Label>
          </CellHeader>
          <CellBody>
            <Input
              type="text"
              placeholder="请选择房号"
              value={this.state.roomLabel}
              onClick={(evt) => {
                evt.preventDefault()
                this.setState({roomPickerShow: true})
              }}
              readOnly={true}
            />
          </CellBody>
        </FormCell>
        {/** room picker */}
        <Picker
          groups={this.state.roomOpts}
          show={this.state.roomPickerShow}
          onCancel={e=>this.setState({roomPickerShow: false})}
          lang={{leftBtn: '取消', rightBtn: '选择'}}
          onChange={selected => this.state.handlePickerChange(selected)}
        />
      </div>
    )
  }
}

export default RoomPicker
