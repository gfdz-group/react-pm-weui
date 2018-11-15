import React, { Component } from 'react'
import {
  FormCell,
  CellBody,
  Uploader
} from 'react-weui'

import AuthService from '../components/auth/AuthService'

class ImageUploader extends Component {
  constructor(props) {
    super(props)
    this.auth = new AuthService();
    this.state = {
      files: [],
    }
    this.upload = this.upload.bind(this)
  }

  upload(file) {
    this.auth.fetch('/api/jwt/uploadFile.do', {
      method: 'POST',
      body: JSON.stringify({ file: file.data })
    })
  }

  render() {
    return (
      <FormCell>
        <CellBody>
          <Uploader
            title="添加照片"
            files={this.state.files}
            onChange={file => this.upload(file)}
          />
        </CellBody>
      </FormCell>
    )
  }
}

export default ImageUploader
