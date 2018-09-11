import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import {
  HouseBinding,
  Expense,
  PmExpense,
  PhoneNumList,
  RepairForm,
  RepairList,
  Repair,
  SuggestionForm,
  SuggestionList,
  Suggestion,
  NoticeList,
  Notice,
  PaymentList,
  Payment,
  HouseList

} from './components'
import { Page, TabBar, TabBarItem, Tab, TabBody } from 'react-weui'
import navBtnIcon from './assets/icon_nav_button.png'
import navMsgIcon from './assets/icon_nav_msg.png'
import navCellIcon from './assets/icon_nav_cell.png'
import ServicePage from '../client/pages/service'
import LifePage from '../client/pages/life'
import AuthService from './components/auth/AuthService'

class Home extends Component {
  constructor(props) {
    super(props)
    this.auth = new AuthService();
    this.state = { tab: 2 }
  }

  render() {
    const profile = this.auth.getProfile();
    console.log(profile);
    return (
      <Page infiniteLoader={false}>
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
              icon={<img src={navBtnIcon}/>}
              label="趣·玩乐"
            />
            <TabBarItem
              active={this.state.tab == 1}
              onClick={e=>this.setState({tab:1})}
              icon={<img src={navMsgIcon}/>}
              label="享·生活"
            />
            <TabBarItem
              active={this.state.tab == 2}
              onClick={e=>this.setState({tab:2})}
              icon={<img src={navCellIcon}/>}
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
    <Home />
    <Switch style={{display: 'none'}}>
      <Route path="/binding" component={HouseBinding} />
      {/** 公告详情 */}
      <Route path="/pm/notice/:id" component={Notice} />
      {/** 便民服务 */}
      <Route path="/pm/service" component={PhoneNumList} />
      {/** 缴费单详情 */}
      <Route path="/pm/payment/:id" component={Payment} />
      {/** 保修单详情 */}
      <Route path="/pm/repair/:id" component={Repair} />
      {/** 投诉建议详情 */}
      <Route path="/pm/suggestion/:id" component={Suggestion} />
      {/** 列表 */}
        <Route exact path="/pm/list/notices" component={NoticeList} />
        <Route exact path="/pm/list/payments" component={PaymentList} />
        <Route exact path="/pm/list/repairs" component={RepairList} />
        <Route exact path="/pm/list/suggestions" component={SuggestionList} />
        <Route exact path="/pm/list/houses" component={HouseList} />
      {/** 表单 */}
        {/** 生活缴费 */}
        <Route path="/pm/expense" component={Expense} />
        {/** 物业缴费 */}
        <Route path="/pm/pm-expense" component={PmExpense} />
        {/** 物业报修 */}
        <Route exact path="/pm/repair" component={RepairForm} />
        {/** 投诉建议 */}
        <Route exact path="/pm/suggestion" component={SuggestionForm} />
    </Switch>
  </div>
)

export default App;
