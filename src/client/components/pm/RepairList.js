import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import {
  Page,
  CellsTitle,
  Preview,
  PreviewHeader,
  PreviewFooter,
  PreviewBody,
  PreviewItem,
  PreviewButton
} from 'react-weui'
import Loading from '../Loading'
import AuthService from '../auth/AuthService'

class RepairList extends Component {
  constructor(props) {
    super()
    this.auth = new AuthService()
    this.state = {
      data: [],
      isLoading: false,
      pagerParams: {
        currentPage: 1,
        perPage: 10,
        totalCount: 0,
        totalPage: 0,
      }
    }
  }

  fetch(pagerParams, callback) {
    const { data } = this.state
    this.setState({ isLoading: true })
    this.auth.fetch(`/api/single/singleList.do?type=${this.getSearchType()}&currentPage=${pagerParams.currentPage}&perPage=${pagerParams.perPage}`)
      .then(res => {
        this.setState({
          data: data.concat(res.items),
          pagerParams: res.pagination,
          isLoading: false
        })
      })
      .then(callback)
  }

  getSearchType() {
    const { location } = this.props
    const search = queryString.parse(location.search)
    return search && search.type ? parseInt(search.type) : 1 /** 1. 物业保修 2. 投诉 3. 建议 */
  }

  componentDidMount() {
    const { pagerParams } = this.state
    this.fetch(pagerParams)
  }

  render() {
    const { isLoading, data, pagerParams } = this.state
    const { currentPage, totalPage } = pagerParams
    const type = this.getSearchType()

    return (
      <Page className="repair-list"
        infiniteLoader={true}
        onLoadMore={(resolve, finish) => {
          if (currentPage >= totalPage) {
            finish()
          } else {
            this.fetch({ ...pagerParams, currentPage: currentPage+1 }, () => resolve())
          }
        }}
      >
        <CellsTitle>{ type === 2 ? '投诉记录' : ( type === 3 ? '我的意见'  : '报修记录' )}</CellsTitle>
        <Loading show={isLoading} />
        {data.map((ticket, idx) => {
          return (
            <div key={idx}>
              <Preview>
                <PreviewHeader>
                  <PreviewItem label={ticket.businessKey} value={ticket.processState} />
                </PreviewHeader>
                <PreviewBody>
                  <PreviewItem label="工单位置" value={ticket.location} />
                  <PreviewItem label="物业报修" value={`${ticket.parentPathName} - ${ticket.pathName}`}/>
                  <PreviewItem label="处理人" value={ticket.handleUserName} />
                  <PreviewItem label="联系电话" value={ticket.handleUserPhone} />
                  <PreviewItem label="报修时间" value={ticket.createDate} />
                  <PreviewItem label="处理时间" value={ticket.handleDate} />
                </PreviewBody>
                <PreviewFooter>
                  <PreviewButton primary>
                    <Link to={`/pm/repair/${ticket.id}`}>查看明细</Link>
                  </PreviewButton>
                </PreviewFooter>
              </Preview>
              <br />
            </div>
          )
        })}
      </Page>
    )
  }
}

export default RepairList;
