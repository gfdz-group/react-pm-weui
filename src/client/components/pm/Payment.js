import React, { Component } from 'react'
import { 
  Page,
  Preview,
  PreviewHeader,
  PreviewBody,
  PreviewItem
} from 'react-weui'

/** data mocking */
const ticket = {
  id: 'JFD20180524122',
  entity: '都铎城邦(云秀) 1号院 1-1-1-601',
  parkingFee: 30,
  startDate: '2020-05-01',
  endDate: '2021-04-30',
  area: 100,
  amount: 360, /** 应缴金额 */
  discount: 0,
}

class Payment extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Page className="payment-detail">
        <Preview>
          <PreviewHeader>
            {ticket.entity}
          </PreviewHeader>
          <PreviewBody>
            <PreviewItem label="车位服务费" value={`${ticket.parkingFee} /个/月`} />
            <PreviewItem label="起始日期" value={ticket.startDate} />
            <PreviewItem label="截止日期" value={ticket.endDate} />
            <PreviewItem label="面积" value={`${ticket.area} 平米`} />
            <PreviewItem label="应缴金额" value={`${ticket.amount} 元`} />
            <PreviewItem label="折扣金额" value={`${ticket.discount} 元`} />
            <PreviewItem label="实缴金额" value={`${ticket.amount-ticket.discount} 元`} />
          </PreviewBody>
        </Preview>
      </Page>
    )
  }
}

export default Payment