import React, { Component } from 'react'
import { Page,
  CellsTitle,
  Panel,
  PanelBody,
  PanelHeader,
  Flex,
  FlexItem,
  Icon,
  MediaBox,
  MediaBoxHeader,
  MediaBoxBody,
  MediaBoxTitle,
  MediaBoxDescription
} from 'react-weui'
import { Link } from 'react-router-dom'
import { ServicePhone } from '../components'

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
                <IconBox icon={<Icon value="success" />} name="我的足迹" />
                <IconBox icon={<Icon value="info" />} name="我的地址" />
                <IconBox icon={<Icon value="warn" />} name="我的评价" />
                <IconBox icon={<Icon value="waiting" />} name="我的收藏" />
              </Flex>
              <div className="mt-10"></div>
              <Flex>
                <Link to="/pm/list/payments">
                  <IconBox icon={<Icon value="success-circle" />} name="缴费记录" />
                </Link>
                <Link to="/pm/list/repairs">
                  <IconBox icon={<Icon value="success-no-circle" />} name="报修记录" />
                </Link>
                <Link to="/pm/list/suggestions">
                  <IconBox icon={<Icon value="download" />} name="投诉记录" />
                </Link>
                <IconBox icon={<Icon value="info-circle" />} name="我的建议" />
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
                <IconBox icon={<Icon value="success-circle" />} name="余额" />
                <Link to="/pm/list/houses">
                  <IconBox icon={<Icon value="waiting-circle" />} name="房源" />
                </Link>
                <IconBox icon={<Icon value="info-circle" />} name="订单" />
                <IconBox icon={<Icon value="cancel" />} name="积分" />
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
                  <IconBox icon={<Icon value="success-circle" />} name="物业缴费" />
                </Link>
                <Link to="/pm/expense">
                  <IconBox icon={<Icon value="success-no-circle" />} name="生活缴费" />
                </Link>
                <Link to="/pm/repair">
                  <IconBox icon={<Icon value="download" />} name="物业报修" />
                </Link>
                <Link to="/pm/suggestion">
                  <IconBox icon={<Icon value="info" />} name="投诉建议" />
                </Link>
              </Flex>
              <div className="mt-10"></div>
              <Flex>
                <IconBox icon={<Icon value="success" />} name="热线服务" onClick={() => this.setState({servicePhoneShow: true})} />
                <Link to="/pm/service">
                  <IconBox icon={<Icon value="info-circle" />} name="便民服务" />
                </Link>
                <Link to="/pm/list/notices">
                  <IconBox icon={<Icon value="warn" />} name="社区公告" />
                </Link>
                <IconBox style={{visibility: 'hidden'}} icon={<Icon value="waiting" />} name="我的收藏" />
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
