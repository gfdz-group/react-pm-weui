import React, { Component } from 'react'
import {
  FormCell,
  CellBody,
  Uploader
} from 'react-weui'
import thumbSrc from '../../assets/thumb.png'

const files = [
  { url: thumbSrc },
  { url: thumbSrc, error: true },
  { url: thumbSrc, status: '48%' },
];

class ImageUploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: files,
    }
  }

  render() {
    return (
      <FormCell>
        <CellBody>
          <Uploader
            title="添加照片"
            files={this.state.files}
          />
        </CellBody>
      </FormCell>
    )
  }
}

export default ImageUploader
