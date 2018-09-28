import React, { Component } from 'react'
import {
  Page,
  Article,
} from 'react-weui'
import Loading from '../Loading'
import AuthService from '../auth/AuthService'

/** data mocking */
const notice = {
  id: 1,
  title: '2018年端午节放假通知',
  content: '放假时间为：2018年6月16日-2018年6月18日（星期六、星期日、星期一），室内外装修禁止进场施工，如发现噪音一律清场，同时装修材料及工程车辆禁止进入园区内，6月19日（星期二）可以正常施工。',
  publishAt: '2018-06-27 14:09',
}

class Notice extends Component {
  constructor() {
    super()
    this.auth = new AuthService()
    this.state = {
      notice: {},
      isLoading: false,
    }
  }

  fetch(id) {
    this.setState({ isLoading: true })
    this.auth.fetch(`/api/prompt/prompt.do?id=${id}`)
      .then(res => {
        this.setState({ notice: res.obj, isLoading: false })
      })
  }

  rawHtml(html) {
    return { __html: html }
  }

  componentDidMount() {
    const { match } = this.props
    const { params } = match
    if (params.id) {
      this.fetch(params.id)
    }
  }

  render() {
    const { notice, isLoading } = this.state
    return (
      <Page class="notice-detail" infiniteLoader={false}>
        <Loading show={isLoading} />
        <Article>
          <h2>{notice.title}</h2>
          <br />
          <section>
            <p dangerouslySetInnerHTML={this.rawHtml(notice.content)}></p>
            <small>{notice.createDate}</small>
          </section>
        </Article>
      </Page>
    )
  }
}

export default Notice
