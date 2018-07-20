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

/** data mocking */
let data = [0,0.0,0,0]
data = data.fill({
  id: 'JFD20180524122',
  price: 360,
  entity: '都铎城邦(云秀) 1号院 1-1-1-601',
  status: '已取消',
})

class PaymentList extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Page className="payment-list" infiniteLoader={false}>
        <CellsTitle>缴费记录</CellsTitle>
        {data.map((ticket, idx) => {
          return (
            <div key={idx}>
              <Preview>
                <PreviewHeader>
                  <PreviewItem label="缴费金额" value={`¥${ticket.price}`} />
                </PreviewHeader>
                <PreviewBody>
                  <PreviewItem label="单号" value={ticket.id} />
                  <PreviewItem label="房屋信息" value={ticket.entity} />
                  <PreviewItem label="单据状态" value={ticket.status} />
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
        })}
      </Page>
    )
  }
}

export default PaymentList  // 物业缴费记录
