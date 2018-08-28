import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'babel-polyfill'
import 'weui/dist/style/weui.min.css'
import 'react-weui/build/packages/react-weui.css'
import './styles/home.less'
import './styles/service-page.less'
import App from './app'

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'))
