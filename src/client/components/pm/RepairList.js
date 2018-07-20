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

let data = [0,0,0,0,0]
data = data.fill({
  id: 'GD201711010009',
  entity: '都铎城邦(云秀) 1号院 1-1-1-601',
  repairType: '公共区域报修',
  status: '已完成',
  handler: '李继',
  phone: '13800000000',
  applyAt: '2017-11-01 18:48:56',
  solvedAt: '2017-11-01 19:00:01',
})

class RepairList extends Component {
  render() {
    return (
      <Page className="repair-list" infiniteLoader={false}>
        <CellsTitle>报修记录</CellsTitle>
        {data.map((ticket, idx) => {
          return (
            <div key={idx}>
              <Preview>
                <PreviewHeader>
                  <PreviewItem label={ticket.id} value={ticket.status} />
                </PreviewHeader>
                <PreviewBody>
                  <PreviewItem label="工单位置" value={ticket.entity} />
                  <PreviewItem label="物业报修" value={ticket.repairType} />
                  <PreviewItem label="办理状态" value={ticket.status} />
                  <PreviewItem label="处理人" value={ticket.handler} />
                  <PreviewItem label="联系电话" value={ticket.phone} />
                  <PreviewItem label="报修时间" value={ticket.applyAt} />
                  <PreviewItem label="处理时间" value={ticket.solvedAt} />
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
