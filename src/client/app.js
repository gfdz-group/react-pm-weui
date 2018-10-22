import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Page, TabBar, TabBarItem, Tab, TabBody } from 'react-weui'
import { Pm, Elder } from './components'
import ServicePage from '../client/pages/service'
import LifePage from '../client/pages/life'
import withAuth from './components/auth/withAuth'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { tab: 2 }
  }

  render() {
    return (
      <Page infiniteLoader={false} ptr={false}>
        <Tab>
          <TabBody>
            <div  style={{display: this.state.tab == 0 ? null : 'none'}}>

            </div>
            <div  style={{display: this.state.tab == 1 ? null : 'none'}}>
              <LifePage />
            </div>
            <div  style={{display: this.state.tab == 2 ? null : 'none'}}>
              <ServicePage />
            </div>
          </TabBody>
          <TabBar className="footer-bar">
            <TabBarItem
              active={this.state.tab == 0}
              onClick={e=>this.setState({tab:0})}
              icon={<icon className="icon iconfont icon-wanle icon-fs-small" />}
              label="趣·玩乐"
            />
            <TabBarItem
              active={this.state.tab == 1}
              onClick={e=>this.setState({tab:1})}
              icon={<icon className="icon iconfont icon-shenghuo_ icon-fs" />}
              label="享·生活"
            />
            <TabBarItem
              active={this.state.tab == 2}
              onClick={e=>this.setState({tab:2})}
              icon={<icon className="icon iconfont icon-fuwu icon-fs" />}
              label="精·服务"
            />
          </TabBar>
        </Tab>
      </Page>
    )
  }
}

const App = () => (
  <div>
    <Switch style={{display: 'none'}}>
      {/** 主页 */}
      <Route exact path="/" component={Home} />
      {/** 物业 */}
      <Route path="/pm" component={Pm} />
      {/** 养老 */}
      <Route path ="/elder" component={Elder} />
    </Switch>
  </div>
)

export default withAuth(App);
