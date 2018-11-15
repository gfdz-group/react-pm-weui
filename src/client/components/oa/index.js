import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Link } from 'react-router-dom'
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
import Avatar from '../Avatar'
import { icons } from '../../utils'
import IconBox from '../IconBox'

import JobForm from './JobForm'
import Binding from './Binding'
import PendingList from './PendingList'
import PendingGroupList from './PendingGroupList'

class Home extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    document.title = '物业办公'
  }

  render() {
    const { user } = this.context
    const { oa, pm } = icons
    return (
      <div title="物业办公" className="page">
        {/** Avatar */}
        <Avatar user={user} />
        {/** Go Back */}
        <Cells>
          <Cell href="/" access>
            <CellBody>
              返回会员中心
            </CellBody>
            <CellFooter />
          </Cell>
        </Cells>
        {/** oa */}
        <Panel>
          <PanelHeader>{oa.name}</PanelHeader>
          <PanelBody>
            <div className="pt-10 pb-10">
              <Flex>
              {oa.icons.map((icon, idx) => {
                return (
                  <Link to={icon.url} key={`${icon.name}-${idx}`}>
                    <IconBox icon={<i className={icon.classNames.join(' ')}/>} name={icon.name} />
                  </Link>
                )
              })}
              </Flex>
            </div>
          </PanelBody>
        </Panel>
        {/** pm */}
        <Panel>
          <PanelHeader>{pm.name}</PanelHeader>
          <PanelBody>
            <div className="pt-10 pb-10">
              <Flex>
                {pm.icons.slice(0,4).map((icon, idx) => {
                  return (
                    <Link to={icon.url} key={`${icon.name}-${idx}`}>
                      <IconBox icon={<i className={icon.classNames.join(' ')}/>} name={icon.name}/>
                    </Link>
                  )
                })}
              </Flex>
              <Flex>
                {pm.icons.slice(4,8).map((icon, idx) => {
                  return (
                    <Link to={icon.url} key={`${icon.name}-${idx}`}>
                      <IconBox icon={<i className={icon.classNames.join(' ')} />} name={icon.name} />
                    </Link>
                  )
                })}
              </Flex>
              <Flex>
                {pm.icons.slice(8,12).map((icon, idx) => {
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
      </div>
    )
  }
}

Home.contextTypes = {
  user: PropTypes.object.isRequired,
}

export default () => {
  return (
    <Switch>
      <Route exact path="/oa" component={Home} />
      <Route exact path="/oa/job" component={JobForm} />
      <Route exact path="/oa/binding" component={Binding} />
      <Route exact path="/oa/pending" component={PendingList} />
      <Route exact path="/oa/pending-group/:id" component={PendingGroupList} />
    </Switch>
  )
}
