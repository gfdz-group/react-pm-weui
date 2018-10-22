import React, { Component } from 'react'
import { Page, Button } from 'react-weui'
import naviImg from '../../assets/navi.png'

class Provision extends Component {
  gotoCalendar() {
    window.location = '/elder/calendar'
  }

  componentDidMount() {
    document.title = "养老公寓"
  }

  render() {
    return (
      <div className="fixed">
      <Page className="provision" infiniteLoader={false} ptr={false}>
        {/** 导航 */}
        <section className="map-banner">
          <div className="map">
            <div className="cover pos-r">
              <div className="text pos-a">
                <h1>官房老年公寓</h1>
                <h2><i className="fa fa-map-marker"></i>官渡区星耀路官房都铎城邦云秀康园4号院4幢1-2层</h2>
              </div>
              <div className="navi pos-a">
                <img className="icon" src={naviImg} alt="" />
                <span>导航</span>
              </div>
            </div>
          </div>
          <div className="phone">服务热线: 0871-63911920</div>
        </section>
        {/** 介绍 */}
        <section className="desc">
          <h3>官房老年公寓简介</h3>
          <div className="desc-text">
            <pre>
              官房老年公寓成立于2015年，是云南省内集“医养结合”、“个性化护理”、“智慧化养老”为一体的养老机构。
              公寓一期位于官渡区古渡口路1111号都铎城邦小区内，有床位50张，主要收住需要护理的老人。公寓一楼设立了社区卫生服务站为入住老人提供专门的医疗服务。
              公寓二期位于佴家湾路4号合金公寓C栋，有床位152张，可收住生活自理和需要护理老人。公寓内设有医务室，配备了专职医生和护士。
              公寓三期与一期仅数百米距离，是集居家养老、社区日间照料、护理服务为一体综合服务体。面积1万多平方米，内设社区爱心食堂、小超市、各种娱乐设施、康体设施，理疗服务等。四期、五期正在筹备之中……
            </pre>
            <pre>
              官房老年公寓连锁化发展，高标准建设适老化施设，电梯、床旁呼叫系统、监控系统等设备齐全，娱乐、健身、康复理疗等功能设计到位。
              *医疗优势 签约绿色就诊通道的三甲医院有：昆明医科大学附一院呈贡分院、市第三人民医院，自有医疗资源：官房康复医院。
              *护理特长  护理团队由从事养老护理专业15年以上的骨干组成，比儿女更懂老人的需求！同时还针对不同的老人订制个性化的、分病种的照护计划。
              *智慧养老 运用国内主流管理软件，医护人员及时掌握、记录入住长者状态，每天测量长者生命体征并将数据上传云端，长者家属运用手机掌握当日老人的血压、心率等。其他穿戴设备及监控设备逐步更新中。
            </pre>
          </div>
        </section>
        {/** 费用 */}
        <section className="fee">
          <h3>收费标准</h3>
          <span>公寓根据老年人护理难度不同，收费分为四类：</span>
          <ul>
            <li>一类：3800元/月/人（含床位费、营养餐费、生活照料费及日常用品使用费等</li>
            <li>二类：4800元/月/人（含床位费、营养餐费、生活照料费及日常用品使用费等</li>
            <li>三类：5800元/月/人（含床位费、营养餐费、生活照料费及日常用品使用费等</li>
            <li>四类：6800元/月/人（含床位费、营养餐费、生活照料费及日常用品使用费等）</li>
          </ul>
        </section>
        {/** 设施 */}
        <section>
          <h3>设施</h3>
          <span>公寓适老化施设齐全，配备电梯、床旁对讲呼叫仪、电子手环、专业助浴设备、进口品牌电动护理床等，是医养结合的五星级养老机构。</span>
        </section>
        {/** 服务内容 */}
        <section>
          <h3>服务内容</h3>
          <span>主要收住需要护理的失能、失智的老人。公寓一楼设立了社区卫生服务站提供专门的医疗服务，还与附近三级医院开通了绿色就诊通道；在护理方面，拥有从业15年以上工作经验为骨于的专业护理团队，能针对不同的老人订制个性化的、分病种的照护计划。</span>
        </section>
        {/** 入住须知 */}
        <section>
          <h3>入住须知</h3>
          <ul>
            <li>收住60及60岁以上无传染疾病老人</li>
            <li>携带老人及监护人身份证</li>
            <li>押金</li>
            <li>近三个月老人的体检资料</li>
          </ul>
        </section>
      </Page>
      <Button className="order-btn" onClick={this.gotoCalendar}>立即订房</Button>
      </div>
    )
  }
}

export default Provision
