import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Panel,
  PanelBody,
  PanelHeader,
  Flex,
  Cells,
  Cell,
  CellBody,
  CellFooter,
} from 'react-weui'
import { Link } from 'react-router-dom'
import ServicePhone from '../components/pm/ServicePhone'
import { icons } from '../utils'
import IconBox from '../components/IconBox'
import Avatar from '../components/Avatar'


class ServicePage extends Component {
  constructor() {
    super()
    this.state = {
      servicePhoneShow: false
    }
  }

  render() {
    const { user } = this.context
    const { mine, assets, more } = icons

    return (
      <div title="精服务" className="page">
        {/** avatar **/}
        <Avatar user={user} />
        {/** Go to admin */}
        { user.isAdmin ?
          <Cells>
            <Cell href="/oa" access>
              <CellBody>
                物业管理平台
              </CellBody>
              <CellFooter />
            </Cell>
          </Cells>
        : null }
        {/** panel 1 */}
        <Panel>
          <PanelBody>
            <PanelHeader>{mine.name}</PanelHeader>
            <div className="pt-10 pb-10">
              <Flex>
                {mine.icons.slice(0,4).map((icon, idx) => {
                  return (
                    <IconBox key={`${icon.name}-${idx}`} icon={<i className={icon.classNames.join(' ')} />} name={icon.name} />
                  )
                })}
              </Flex>
              <div className="mt-10"></div>
              <Flex>
               {mine.icons.slice(4,8).map((icon, idx) => {
                return (
                  <Link to={icon.url} key={`${icon.name}-${idx}`}>
                    <IconBox icon={<i className={icon.classNames.join(' ')} />} name={icon.name} />
                  </Link>
                  )
                })}
              </Flex>
            </div>
          </PanelBody>
        </Panel>
        {/** panel 2 **/}
        <Panel>
          <PanelHeader>{assets.name}</PanelHeader>
          <PanelBody>
            <div className="pt-10 pb-10">
              <Flex>
                {assets.icons.map((icon, idx) => {
                  return (
                    <Link to={icon.url}  key={`${icon.name}-${idx}`}>
                      <IconBox icon={<i className={icon.classNames.join(' ')} />} name={icon.name} />
                    </Link>
                  )
                })}
              </Flex>
            </div>
          </PanelBody>
        </Panel>
        {/** panel 3 **/}
        <Panel>
          <PanelHeader>{more.name}</PanelHeader>
          <PanelBody>
            <div className="pt-10 pb-10">
              <Flex>
                {more.icons.slice(0,4).map((icon, idx) => {
                  return (
                    <Link to={icon.url} key={`${icon.name}-${idx}`}>
                      <IconBox icon={<i className={icon.classNames.join(' ')} />} name={icon.name} />
                    </Link>
                  )
                })}
              </Flex>
              <div className="mt-10"></div>
              <Flex>
                <IconBox icon={<i className="icon iconfont icon-tel-service icon-fs orange-red" />} name="热线服务" onClick={() => this.setState({servicePhoneShow: true})} />
                {more.icons.slice(4,8).map((icon, idx) => {
                  return (
                    <Link to={icon.url} key={`${icon.name}-${idx}`} style={{ visibility: icon.hide ? 'hidden' : 'visible' }}>
                      <IconBox icon={<i className={icon.classNames.join(' ')} />} name={icon.name} />
                    </Link>
                  )
                })}
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

ServicePage.contextTypes = {
  user: PropTypes.object.isRequired
}

export default ServicePage
