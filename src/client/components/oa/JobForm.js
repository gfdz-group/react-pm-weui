import React, { Component } from 'react'
import {
  Page,
  CellsTitle,
  Form,
} from 'react-weui'
import ImageUploader from '../ImageUploader'

class JobForm extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Page infiniteLoader={false} ptr={false}>
        <CellsTitle>
          工单填报
        </CellsTitle>
        <Form>
          <ImageUploader />
        </Form>
      </Page>
    )
  }
}

export default JobForm
