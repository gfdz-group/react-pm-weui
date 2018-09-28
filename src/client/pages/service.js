import React, { Component } from 'react'
import {
  Panel,
  PanelBody,
  PanelHeader,
  Flex,
  FlexItem,
  MediaBox,
  MediaBoxHeader,
  MediaBoxBody,
  MediaBoxTitle,
  MediaBoxDescription
} from 'react-weui'
import { Link } from 'react-router-dom'
import ServicePhone from '../components/pm/ServicePhone'

const IconBox = (props) => {
  return (
    <FlexItem className="icon-box"
      style={props.style}
      onClick={typeof props.onClick === 'function' ? props.onClick : () => {}}>
      {props.icon}
      <span>{props.name}</span>
    </FlexItem>
  )
}

import { appMsgIcon } from './mock'

class ServicePage extends Component {
  constructor() {
    super()
    this.state = {
      servicePhoneShow: false
    }
  }

  render() {
    return (
      <div title="精服务" className="page">
        {/** avatar **/}
        <Panel>
          <PanelBody>
            <MediaBox type="appmsg">
              <MediaBoxHeader>
                <img src={appMsgIcon} />
              </MediaBoxHeader>
              <MediaBoxBody>
                <MediaBoxTitle>
                  用户XXX
                </MediaBoxTitle>
                <MediaBoxDescription>
                  普通会员
                </MediaBoxDescription>
              </MediaBoxBody>
            </MediaBox>
          </PanelBody>
        </Panel>
        {/** panel 1 */}
        <Panel>
          <PanelBody>
            <div className="pt-10 pb-10">
              <Flex>
                <IconBox icon={<i className="icon iconfont icon-zuji icon-fs orange"  />} name="我的足迹"  />
                <IconBox icon={<i className="icon iconfont icon-dizhiaddress icon-fs deepskyblue" />} name="我的地址" />
                <IconBox icon={<i className="icon iconfont icon-pingjia icon-fs hotpink" />} name="我的评价" />
                <IconBox icon={<i className="icon iconfont icon-shoucang- icon-fs yellowgreen" />} name="我的收藏" />
              </Flex>
              <div className="mt-10"></div>
              <Flex>
                <Link to="/pm/list/payments">
                  <IconBox icon={<i className="icon iconfont icon-jiaofeijilu icon-fs lightskyblue" />} name="缴费记录" />
                </Link>
                <Link to="/pm/list/repairs">
                  <IconBox icon={<i className="icon iconfont icon-baoxiujilu icon-fs lightseagreen" />} name="报修记录" />
                </Link>
                <Link to="/pm/list/repairs?type=2">
                  <IconBox icon={<i className="icon iconfont icon-tousu icon-fs firebrick" />} name="投诉记录" />
                </Link>
                <Link to="/pm/list/repairs?type=3">
                  <IconBox icon={<i className="icon iconfont icon-jianyi icon-fs rebeccapurple" />} name="我的建议" />
                </Link>
              </Flex>
            </div>
          </PanelBody>
        </Panel>
        {/** panel 2 **/}
        <Panel>
          <PanelHeader>
            我的资产
          </PanelHeader>
          <PanelBody>
            <div className="pt-10 pb-10">
              <Flex>
                <IconBox icon={<i className="icon iconfont icon-yue icon-fs orangered" />} name="余额" />
                <Link to="/pm/list/houses">
                  <IconBox icon={<i className="icon iconfont icon-2fangyuan icon-fs deepskyblue" />} name="房源" />
                </Link>
                <IconBox icon={<i className="icon iconfont icon-dingdan icon-fs lightseagreen" />} name="订单" />
                <IconBox icon={<i className="icon iconfont icon-liwu icon-fs hotpink" />} name="积分" />
              </Flex>
            </div>
          </PanelBody>
        </Panel>
        {/** panel 3 **/}
        <Panel>
          <PanelHeader>更多推荐</PanelHeader>
          <PanelBody>
            <div className="pt-10 pb-10">
              <Flex>
                <Link to="/pm/pm-expense">
                  <IconBox icon={<i className="icon iconfont icon-wuyejiaofei icon-fs lightskyblue" />} name="物业缴费" />
                </Link>
                <Link to="/pm/expense">
                  <IconBox icon={<i className="icon iconfont icon-shenghuojiaofei icon-fs mediumseagreen" />} name="生活缴费" />
                </Link>
                <Link to="/pm/repair">
                  <IconBox icon={<i className="icon iconfont icon-wuyebaoxiu icon-fs darkorange" />} name="物业报修" />
                </Link>
                <Link to="/pm/suggestion">
                  <IconBox icon={<i className="icon iconfont icon-tousujianyi icon-fs rebeccapurple" />} name="投诉建议" />
                </Link>
              </Flex>
              <div className="mt-10"></div>
              <Flex>
                <IconBox icon={<i className="icon iconfont icon-rexian icon-fs orangered" />} name="热线服务" onClick={() => this.setState({servicePhoneShow: true})} />
                <Link to="/pm/service">
                  <IconBox icon={<i className="icon iconfont icon-bianminfuwu icon-fs yellowgreen" />} name="便民服务" />
                </Link>
                <Link to="/pm/list/notices">
                  <IconBox icon={<i className="icon iconfont icon-shequgonggao icon-fs lightseagreen" />} name="社区公告" />
                </Link>
                <IconBox style={{visibility: 'hidden'}} icon={<i className="icon iconfont icon-shoucang- icon-fs" />} name="我的收藏" />
              </Flex>
            </div>
          </PanelBody>
        </Panel>
        {/** popup */}
        <ServicePhone show={this.state.servicePhoneShow} onCancel={() => this.setState({servicePhoneShow: false})} />
      </div>
    )
  }
}

export default ServicePage
