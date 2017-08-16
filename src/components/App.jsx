import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import '../styles/app.scss'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink exact to="/">home</NavLink></li>
          <li><NavLink exact to="/test">test</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" render={() => <h2>A React and Mobx Website.</h2>}/>
          <Route exact path="/test" render={() => <h2>A test page.</h2>}/>
        </Switch>
      </div>
    )
  }
}
