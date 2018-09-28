import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Provision from './Provision'

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/elder/provision" component={Provision} />
      </Switch>
    </div>
  )
}
