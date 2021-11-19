import React from 'react'
import { Route, Switch } from 'react-router-native'

import Home from './views/Home'
import AddTask from './views/AddTask'
import Login from './views/auth/Login'
import SignUp from './views/auth/SignUp'
import ForgotPass from './views/auth/ForgotPass'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/sign-up" component={SignUp} />
    <Route exact path="/forgot-pass" component={ForgotPass} />
  </Switch>
)

export default Routes
