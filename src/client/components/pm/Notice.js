import React, { Component } from 'react'
import {
  Page,
  Article,
} from 'react-weui'

/** data mocking */
const notice = {
  id: 1,
  title: '2018年端午节放假通知',
  content: '放假时间为：2018年6月16日-2018年6月18日（星期六、星期日、星期一），室内外装修禁止进场施工，如发现噪音一律清场，同时装修材料及工程车辆禁止进入园区内，6月19日（星期二）可以正常施工。',
  publishAt: '2018-06-27 14:09',
}

class Notice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notice: notice
    }
  }

  render() {
    return (
      <Page class="notice-detail">
        <Article>
          <h2>{this.state.notice.title}</h2>
          <br />
          <section>
            <p>{this.state.notice.content}</p>
            <small>{this.state.notice.publishAt}</small>
          </section>
        </Article>
      </Page>
    )
  }
}

export default Notice
