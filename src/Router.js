import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import MainLayout from './Layout/MainLayout'

import {
  BlogPost,
  Home,
  Login,
  NewPost,
  Categories,
  Page404,
} from './pages'

export default (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout exact path="/" component={Home} />
        <MainLayout exact path="/post/:id" component={BlogPost} {...props} />
        <MainLayout exact path="/category/:id" component={Categories} {...props} />
        <Route exact path="/login" component={Login} />
        {
          localStorage.getItem('token') &&
          <Route exact path="/new" component={NewPost} />
        }
        <MainLayout exact path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  )
}