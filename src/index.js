import { createHashHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import App from './components/App'

export const history = createHashHistory()

ReactDOM.render(
  <Router history={history}>
    <App/>
  </Router>,
  document.getElementById('app'))
