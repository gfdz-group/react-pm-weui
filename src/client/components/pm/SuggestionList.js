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
let data = [0,0,0,0,0];
data = data.fill({
  id: 'GD201703070101',
  entity: '都铎城邦(云秀) 1号院 1-1-1-601',
  suggestionType: '建议 [其他建议]',
  status: '已完成',
  handler: '万石洪',
  phone: '13800000000',
  applyAt: '2017-03-07 16:08:18',
  solvedAt: '2017-03-08 20:24:22',
});

class SuggestionList extends Component {
  render() {
    return (
      <Page className="suggestion-list" infiniteLoader={false}>
        <CellsTitle>投诉建议</CellsTitle>
        {data.map((ticket, idx) => {
          return (
            <div key={idx}>
              <Preview>
                <PreviewHeader>
                  <PreviewItem label={ticket.id} value={ticket.status} />
                </PreviewHeader>
                <PreviewBody>
                  <PreviewItem label="工单位置" value={ticket.entity} />
                  <PreviewItem label="投诉建议" value={ticket.suggestionType} />
                  <PreviewItem label="办理状态" value={ticket.status} />
                  <PreviewItem label="处理人" value={ticket.handler} />
                  <PreviewItem label="联系电话" value={ticket.phone} />
                  <PreviewItem label="报修时间" value={ticket.applyAt} />
                  <PreviewItem label="处理时间" value={ticket.solvedAt} />
                </PreviewBody>
                <PreviewFooter>
                  <PreviewButton primary>
                    <Link to={`/pm/suggestion/${ticket.id}`}>查看明细</Link>
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

export default SuggestionList;
