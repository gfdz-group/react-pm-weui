import React, { Component } from 'react'
import {
  Page,
  Panel,
  PanelHeader,
  PanelBody,
  MediaBox,
  MediaBoxTitle,
  MediaBoxDescription
} from 'react-weui'
import { Link } from 'react-router-dom'

/** data mocking */
const notices = [
  { id: 1, title: '2018年端午节放假通知', publishAt: '2018-06-27 14:09' },
  { id: 2, title: '关于1号院2号门排水施工通知', publishAt: '2018-06-11 23:09' },
  { id: 3, title: '众和康园停水通知', publishAt: '2018-06-05 16:45' }
]

class NoticeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notices: notices
    }
  }

  render() {
    return (
      <Page className="notice-list">
        <Panel>
          <PanelHeader>
            通知公告
          </PanelHeader>
          <PanelBody>
            {this.state.notices.map((n, idx) => {
              return (
                <Link to={`/pm/notice/${n.id}`} key={idx}>
                  <MediaBox type="text">
                    <MediaBoxTitle>{n.title}</MediaBoxTitle>
                    <MediaBoxDescription>{n.publishAt}</MediaBoxDescription>
                  </MediaBox>
                </Link>
              )
            })}
          </PanelBody>
        </Panel>
      </Page>
    )
  }
}

export default NoticeList
