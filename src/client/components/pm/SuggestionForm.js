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
  Uploader,
  TextArea,
  ButtonArea,
  Button
} from 'react-weui'
import RoomPicker from './RoomPicker'
import ImageUploader from '../ImageUploader'

const suggestionTypeOpts = [{
  name: '建议',
  code: 1,
  sub: [
    {
      name: '日常服务工作',
      code: 1,
    },
    {
      name: '门禁设置',
      code: 2,
    }
  ]
}, {
  name: '投诉',
  code: 2,
  sub: [
    {
      name: '绿化景观',
      code: 3,
    },
    {
      name: '违规搭建',
      code: 4,
    },
    {
      name: '高空坠物',
      code: 5,
    }
  ]
}];

class SuggestionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestionTypeOpts: suggestionTypeOpts,
      suggestionTypeShow: false,
      suggestionTypeStr: '',
      suggestionContent: '',
    }
  }

  render() {
    return (
      <Page>
        <CellsTitle>投诉建议</CellsTitle>
        <Form>
          {/** room number */}
          <RoomPicker />
          {/** suggestion time */}
          <FormCell>
            <CellHeader>
              <Label>投诉/建议</Label>
            </CellHeader>
            <CellBody>
              <Input
                placeholder="投诉建议分类"
                value={this.state.suggestionTypeStr}
                onClick={() => this.setState({suggestionTypeShow: true})}
              />
            </CellBody>
          </FormCell>
          <CityPicker
            data={this.state.suggestionTypeOpts}
            show={this.state.suggestionTypeShow}
            onCancel={() => this.setState({suggestionTypeShow: false})}
            onChange={(text) => this.setState({suggestionTypeStr: text, suggestionTypeShow: false})}
          />
        </Form>
        {/** image upload */}
        <ImageUploader />
        {/** suggestion content */}
        <FormCell>
          <CellBody>
            <TextArea value={this.state.suggestionContent}
              placeholder="投诉建议"
              onChange={(evt) => this.setState({suggestionContent: evt.target.value})} />
          </CellBody>
        </FormCell>
        {/** button area */}
        <ButtonArea>
          <Button>提交</Button>
        </ButtonArea>
      </Page>
    )
  }
}

export default SuggestionForm

