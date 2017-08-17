import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" render={() => <h2>A React and Mobx Website.</h2>}/>
          <Route exact path="/test" render={() => <h2>A test page.</h2>}/>
        </Switch>
      </div>
    )
  }
}
