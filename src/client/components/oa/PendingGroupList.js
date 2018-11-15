import React, { Component } from 'react'
import {} from 'react-weui'
import {
  Page,
  CellsTitle,
  Preview,
  PreviewHeader,
  PreviewBody,
  PreviewItem,
} from 'react-weui'
import Loading from '../Loading'
import AuthService from '../auth/AuthService'

class PendingGroupList extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      data: [],
      pagerParams: {
        currentPage: 1,
        perPage: 10,
        totalCount: 0,
        totalPage: 0,
      }
    }
    this.auth = new AuthService()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {

  }

  fetch(pagerParams, callback) {
    const { data } = this.state
    const { currentPage, perPage } = pagerParams
    this.setState({ isLoading: true })
    this.auth.fetch(`/api/process/taskGroupList.do?currentPage`, {
      method: 'POST',
      body: JSON.stringify({
        currentPage,
        perPage,
      })
    })
      .then(res => {
        const { code, msg, items, pagination } = res
        if (code === 0) {
          this.setState({
            data: data.concat(items),
            pagerParams: pagination,
            isLoading: false
          })
        } else {
          alert(msg)
        }
      })
      .then(callback)
  }

  componentDidMount() {
    const { pagerParams } = this.state
    this.fetch(pagerParams)
  }

  render() {
    const { isLoading, data, pagerParams } = this.state
    const { currentPage, totalPage } = pagerParams
    return (
      <Page className="pm-pending-group-list"
        ptr={false}
        infiniteLoader={true}
        onLoadMore={(resolve, finish) => {
          if (currentPage >= totalPage) {
            finish()
          } else {
            this.fetch({ ...pagerParams, currentPage: currentPage + 1 }, () => resolve())
          }
        }}
      >
        <Loading show={isLoading} />
        <CellsTitle>我的待办任务</CellsTitle>
        {data.map((item, idx) => {
          return (
            <div key={idx}>
              <Preview>
                <PreviewHeader>
                  <PreviewItem label="单号" value={item.businessKey} />
                </PreviewHeader>
                <PreviewBody>
                  <PreviewItem label="工单类型" value={item.processName} />
                  <PreviewItem label="审批节点" value={item.nodeName} />
                  <PreviewItem label="申请人" value={item.applyUser} />
                  <PreviewItem label="申请时间" value={item.applyDate} />
                </PreviewBody>
              </Preview>
              <br />
            </div>
          )
        })}
      </Page>
    )
  }
}

export default PendingGroupList
