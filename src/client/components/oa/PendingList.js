import React, { Component } from 'react'
import PropType from 'prop-types'
import { Page, CellsTitle, Cells, Cell, CellBody, CellFooter } from 'react-weui'
import Loading from '../Loading'
import AuthService from '../auth/AuthService'

class PendingList extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      data: [],
    }
    this.auth = new AuthService()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({isLoading: true})
    this.auth.fetch('/api/process/taskGroup.do')
      .then(res => {
        const {code, msg, items} = res
        if (code === 0) {
          this.setState({
            isLoading: false,
            data: items,
          })
        } else {
          alert(msg)
        }
      })
  }

  handleClick(pid) {
    const { router } = this.context
    router.history.push(`/oa/pending-group/${pid}`)
  }

  render() {
    const { isLoading, data } = this.state
    return (
      <Page className="pm-pending-list" ptr={false} infiniteLoader={false}>
        <Loading show={isLoading} />
        <CellsTitle>我的待办</CellsTitle>
        <Cells>
          {data.map((item, idx) => {
            return (
              <Cell key={idx} access onClick={() => { this.handleClick(item.pid) }}>
                <CellBody>
                  {item.name}
                </CellBody>
                <CellFooter />
              </Cell>
            )
          })}
        </Cells>
      </Page>
    )
  }
}

PendingList.contextTypes = {
  router: PropType.object.isRequired,
}

export default PendingList
