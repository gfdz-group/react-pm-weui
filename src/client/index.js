import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import 'babel-polyfill'
import 'weui/dist/style/weui.min.css'
import 'react-weui/build/packages/react-weui.css'
import './styles/home.less'
import './styles/elder.less'
import './styles/service-page.less'
import './styles/iconfont.css'
import App from './app'
import Login from './components/auth/Login'

ReactDom.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'))
