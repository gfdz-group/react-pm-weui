import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HouseBinding from './Binding'
import Expense from './Expense'
import PmExpense from './PmExpense'
import RepairForm from './RepairForm'
import RepairList from './RepairList'
import Repair from './Repair'
import SuggestionForm from './SuggestionForm'
import NoticeList from './NoticeList'
import Notice from './Notice'
import PhoneNumList from './PhoneNumList'
import PaymentList from './PaymentList'
import Payment from './Payment'
import HouseList from './HouseList'

export default () => {
  return (
    <Switch>
      {/** 房源绑定 */}
      <Route path="/pm/binding" component={HouseBinding} />
      {/** 公告详情 */}
      <Route path="/pm/notice/:id" component={Notice} />
      {/** 便民服务 */}
      <Route path="/pm/service" component={PhoneNumList} />
      {/** 缴费单详情 */}
      <Route path="/pm/payment/:id" component={Payment} />
      {/** 报修单详情 */}
      <Route path="/pm/repair/:id" component={Repair} />
      {/** 社区公告 */}
      <Route exact path="/pm/list/notices" component={NoticeList} />
      {/** 缴费记录 */}
      <Route exact path="/pm/list/payments" component={PaymentList} />
      {/** 报修记录 */}
      <Route exact path="/pm/list/repairs" component={RepairList} />
      {/** 房源信息 */}
      <Route exact path="/pm/list/houses" component={HouseList} />
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
}
