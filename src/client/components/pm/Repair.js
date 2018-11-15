import React, { Component } from 'react'
import {
  Page,
  Preview,
  PreviewBody,
  PreviewItem
} from 'react-weui'

/** data mocking */
const ticket = {
  id: "GD201711010009",
  entity: '都铎城邦(云秀) 1号院 1-1-1-601',
  owner: '林杰',
  ownerPhone: '13800000000',
  repairType: '公共区域报修',
  repairContent: '测试工单',
  reporter: '林杰',
  reportDate: '2017-11-01 16:46:56',
  status: '已完成',
  handler: '李继',
  feedBack: '测试工单已处理',
}

class Repair extends Component {
  render() {
    return (
      <Page className="repair-detail" infiniteLoader={false} ptr={false}>
        <Preview>
          <PreviewBody>
            <PreviewItem label="单号" value={ticket.id}></PreviewItem>
            <PreviewItem label="位置" value={ticket.entity}></PreviewItem>
            <PreviewItem label="业主" value={ticket.owner}></PreviewItem>
            <PreviewItem label="业主号码" value={ticket.ownerPhone}></PreviewItem>
            <PreviewItem label="报修人员" value={ticket.repairType}></PreviewItem>
            <PreviewItem label="报修人员" value={ticket.reporter}></PreviewItem>
            <PreviewItem label="报修时间" value={ticket.reportDate}></PreviewItem>
            <PreviewItem label="处理状态" value={ticket.status}></PreviewItem>
            <PreviewItem label="处理人" value={ticket.handler}></PreviewItem>
            <PreviewItem label="处理结果" value={ticket.feedBack}></PreviewItem>
          </PreviewBody>
        </Preview>
      </Page>
    )
  }
}

export default Repair
