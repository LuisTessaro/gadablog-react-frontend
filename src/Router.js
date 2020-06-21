import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import MainLayout from './Layout/MainLayout'

import {
  BlogPost,
  Home,
  Login,
  NewPost,
} from './pages'

export default (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout exact path="/" component={Home} />
        <MainLayout exact path="/post/:id" component={BlogPost} {...props} />
        <Route exact path="/login" component={Login} />
        {
          localStorage.getItem('token') &&
          <Route exact path="/new" component={NewPost} />
        }
        <Route exact path="*" component={() => <div>Num tem nada aqui sinho</div>} />
      </Switch>
    </BrowserRouter>
  )
}