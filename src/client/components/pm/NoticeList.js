import React, { Component } from 'react'
import {
  Badge,
  CellsTitle,
  Page,
  MediaBox,
  MediaBoxTitle,
  MediaBoxDescription
} from 'react-weui'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import AuthService from '../auth/AuthService'

class NoticeList extends Component {
  constructor() {
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
    this.auth.fetch(`/api/prompt/promptList.do?currentPage=${pagerParams.currentPage}&perPage=${pagerParams.perPage}`)
      .then(res => {
        this.setState({
          data: data.concat(res.items),
          pagerParams: res.pagination,
          isLoading: false
        })
      })
      .then(callback);
  }

  componentDidMount() {
    const { pagerParams } = this.state
    this.fetch(pagerParams)
  }

  render() {
    const { isLoading, data, pagerParams } = this.state
    const { currentPage, totalPage } = pagerParams

    return (
      <Page className="notice-list"
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
        <CellsTitle>通知公告</CellsTitle>
        <Loading show={isLoading} />
        {data.map((n, idx) => {
          return (
            <Link to={`/pm/notice/${n.id}`} key={idx}>
              <MediaBox type="text">
                <MediaBoxTitle>
                  { n.type && <Badge preset="footer">{n.type}</Badge>}
                  {n.title}
                </MediaBoxTitle>
                <MediaBoxDescription>{n.createDate}</MediaBoxDescription>
              </MediaBox>
            </Link>
          )
        })}
      </Page>
    )
  }
}

export default NoticeList
