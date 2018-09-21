import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Page } from 'react-weui'
import {
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

class PaymentList extends Component {
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
    this.setState({isLoading: true})
    this.auth.fetch(`/api/charge/chargeList.do?currentPage=${pagerParams.currentPage}&perPage=${pagerParams.perPage}`)
      .then(res => {
        this.setState({
          data: data.concat(res.items),
          pagerParams: res.pagination,
          isLoading: false,
        })
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
      <Page className="payment-list"
        infiniteLoader={true}
        onLoadMore={(resolve, finish) => {
          if (currentPage >= totalPage) {
            finish()
          } else {
            this.fetch({ ...pagerParams, currentPage: currentPage+1 }, () => resolve())
          }
      }} >
        <CellsTitle>缴费记录</CellsTitle>
        <Loading show={isLoading} />
        {
          data.map((ticket, idx) => {
            return (
              <div key={idx}>
                <Preview>
                  <PreviewHeader>
                    <PreviewItem label="缴费金额" value={`¥${ticket.receivables}`} />
                  </PreviewHeader>
                  <PreviewBody>
                    <PreviewItem label="单号" value={ticket.businessKey} />
                    <PreviewItem label="房屋信息" value={ticket.houseName} />
                    <PreviewItem label="单据状态" value={ticket.chargeState} />
                  </PreviewBody>
                  <PreviewFooter>
                    <PreviewButton primary>
                      <Link to={`/pm/payment/${ticket.id}`}>查看明细</Link>
                    </PreviewButton>
                  </PreviewFooter>
                </Preview>
                <br />
              </div>
            )
          })
        }
      </Page>
    )
  }
}

export default PaymentList  // 物业缴费记录
