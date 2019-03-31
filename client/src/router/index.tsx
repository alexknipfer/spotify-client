import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from '../views/Login'
import { Callback } from '../views/Callback'
import { DefaultLayoutRoute } from './components/DefaultLayoutRoute'

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayoutRoute exact path="/" component={Login} />
        <DefaultLayoutRoute exact path="/callback" component={Callback} />
      </Switch>
    </BrowserRouter>
  )
}
