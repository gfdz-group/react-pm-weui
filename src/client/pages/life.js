import React, { Component } from 'react'
import { Grids } from 'react-weui'
import srcArticle from '../assets/pic_article.png';
import iconSrc1 from '../assets/icon_nav_zjd.png'
import iconSrc2 from '../assets/icon_nav_jyl.png'
import iconSrc3 from '../assets/icon_nav_wjk.png'
import iconSrc4 from  '../assets/icon_nav_js.png'
import iconSrc5 from '../assets/icon_nav_zfw.png'
import iconSrc6 from '../assets/icon_nav_klp.png'
import iconSrc7 from '../assets/icon_nav_nmds.png'
import iconSrc8 from '../assets/icon_nav_hjf.png'
import iconSrc9 from '../assets/icon_nav_lfsq.png'
/*const template = {
  icon: <img src={iconSrc} />,
  href: 'javascript:;'
}*/

const data = [
  /*Object.assign({ label: '住酒店' , icon: <icon className="icon iconfont icon-ruzhujiudian icon-fs" />, href: 'javascript:;' }),*/
    Object.assign({ label: '住酒店' , icon: <img src={iconSrc1} />, href: 'javascript:;' }),
  Object.assign({ label: '居养老' , icon: <img src={iconSrc2} />, href: 'javascript:;' }),
  Object.assign({ label: '问健康' , icon: <img src={iconSrc3} />, href: 'javascript:;' }),

  Object.assign({ label: '接送机' ,  icon: <img src={iconSrc4} />, href: 'javascript:;' }),
  Object.assign({ label: '租房屋' ,  icon: <img src={iconSrc5} />, href: 'javascript:;' }),
  Object.assign({ label: '看楼盘' ,  icon: <img src={iconSrc6} />, href: 'javascript:;' }),

  Object.assign({ label: '柠檬大师' ,  icon: <img src={iconSrc7} />, href: 'javascript:;' }),
  Object.assign({ label: '红酒坊' ,  icon: <img src={iconSrc8} />, href: 'javascript:;' }),
  Object.assign({ label: '来访申请' ,  icon: <img src={iconSrc9} />, href: 'javascript:;' }),
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
