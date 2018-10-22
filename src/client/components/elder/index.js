import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Provision from './Provision'
import Calendar from './Calendar'
import DatePicker from './DatePicker'
import Order from './order'

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/elder" component={Provision} />
        <Route path="/elder/provision" component={Provision} />
        <Route path="/elder/calendar" component={Calendar} />
        <Route path="/elder/date-picker" component={DatePicker} />
        <Route path="/elder/order/:roomId" component={Order} />
      </Switch>
    </div>
  )
}
