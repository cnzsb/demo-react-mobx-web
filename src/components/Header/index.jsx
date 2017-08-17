import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/logo.svg'
import './style.scss'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link className="logo" to="/"><img src={logo} alt=""/></Link>
        <ul className="navbar">
          <li><NavLink className="navbar-item" exact to="/">home</NavLink></li>
          <li><NavLink className="navbar-item" exact to="/test">test</NavLink></li>
        </ul>
      </header>
    )
  }
}
