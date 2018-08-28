import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import URI from 'urijs'
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
  Payment
} from './components'
import { Page, TabBar, TabBarItem, Tab, TabBody } from 'react-weui'
import navBtnIcon from './assets/icon_nav_button.png'
import navMsgIcon from './assets/icon_nav_msg.png'
import navCellIcon from './assets/icon_nav_cell.png'
import ServicePage from '../client/pages/service'
import LifePage from '../client/pages/life'

const APP_ID = 'wxd71b26449d78607a'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { tab: 2 }
  }

  componentDidMount() {
    const uri = new URI(document.location.href);
    const query = uri.query(true);
    const { code } = query
    if (!Boolean(code)) {
      document.location = this.generateGetCodeUrl(document.location.href);
    } else {
      this.getToken(code);
    }
  }

  async getToken(code) {
    const res = await fetch('/api/jwt/getToken.do', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({ code }),
      method: 'POST',
      credentials: 'same-origin',
    });
    const body = await res.json();
    return body;
  }

  generateGetCodeUrl(redirectURL) {
    return new URI('https://open.weixin.qq.com/connect/oauth2/authorize')
      .addQuery("appid", APP_ID)
      .addQuery("redirect_uri", redirectURL)
      .addQuery("response_type", "code")
      .addQuery("scope", "snsapi_base")
      .addQuery("response_type", "code")
      .hash("wechat_redirect")
      .toString();
  }

  render() {
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
  <Switch>
    <Route exact path="/" component={Home}/>
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
)

export default App;
