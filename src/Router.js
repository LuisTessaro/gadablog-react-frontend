import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import {
  BlogPost,
  Home,
} from './pages'

export default (props) => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={BlogPost} {...props} />
        <Route exact path="*" component={() => <div>Num tem nada aqui sinho</div>} />
      </Switch>
    </BrowserRouter>
  )
}