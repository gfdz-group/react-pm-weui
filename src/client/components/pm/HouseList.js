import React, { Component } from 'react'
import {
  Page,
  Panel,
  PanelHeader,
  PanelBody,
} from 'react-weui'
import AuthService from '../auth/AuthService'

class HouseList extends Component {
  constructor(props) {
    super(props)
    this.auth = new AuthService()
    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    this.auth.fetch('/api/house/houseList.do')
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <Page className="house-list">
        <Panel>
          <PanelHeader>
            房源信息
          </PanelHeader>
          <PanelBody>

          </PanelBody>
        </Panel>
      </Page>
    )
  }
}

export default HouseList
