import React, { Component } from 'react'
import { Grids } from 'react-weui'
import srcArticle from '../assets/pic_article.png';
import iconSrc from '../assets/icon_tabbar.png'

const template = {
  icon: <img src={iconSrc} />,
  href: 'javascript:;'
}

const data = [
  Object.assign({ label: '住酒店' }, template),
  Object.assign({ label: '居养老' }, template),
  Object.assign({ label: '问健康' }, template),

  Object.assign({ label: '接送机' }, template),
  Object.assign({ label: '租房屋' }, template),
  Object.assign({ label: '看楼盘' }, template),

  Object.assign({ label: '柠檬大师' }, template),
  Object.assign({ label: '红酒坊' }, template),
  Object.assign({ label: '来访申请' }, template),
]

class LifePage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <img src={srcArticle} style={{width: '100%', marginBottom: -7}} />
        <div title="享生活" className="page">
          <Grids data={data}/>
        </div>
      </div>
    )
  }
}

export default LifePage
