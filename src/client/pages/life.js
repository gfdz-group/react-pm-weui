import React, { Component } from 'react'
import { Grids } from 'react-weui'
import srcArticle from '../assets/pic_article.png';
import iconSrc from '../assets/icon_tabbar.png'

/*const template = {
  icon: <img src={iconSrc} />,
  href: 'javascript:;'
}*/

const data = [
  Object.assign({ label: '住酒店' , icon: <icon className="icon iconfont icon-ruzhujiudian icon-fs" />, href: 'javascript:;' }),
  Object.assign({ label: '居养老' , icon: <icon className="icon iconfont icon-pension icon-fs" />, href: 'javascript:;' }),
  Object.assign({ label: '问健康' , icon: <icon className="icon iconfont icon-jiankang icon-fs" />, href: 'javascript:;' }),

  Object.assign({ label: '接送机' ,  icon: <icon className="icon iconfont icon-jiesongji icon-fs" />, href: 'javascript:;' }),
  Object.assign({ label: '租房屋' ,  icon: <icon className="icon iconfont icon-zufang icon-fs" />, href: 'javascript:;' }),
  Object.assign({ label: '看楼盘' ,  icon: <icon className="icon iconfont icon-loupan-xiankuang icon-fs" />, href: 'javascript:;' }),

  Object.assign({ label: '柠檬大师' ,  icon: <icon className="icon iconfont icon-ningmeng icon-fs" />, href: 'javascript:;' }),
  Object.assign({ label: '红酒坊' ,  icon: <icon className="icon iconfont icon-hongjiuxilie icon-fs" />, href: 'javascript:;' }),
  Object.assign({ label: '来访申请' ,  icon: <icon className="icon iconfont icon-visitrecord icon-fs" />, href: 'javascript:;' }),
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
