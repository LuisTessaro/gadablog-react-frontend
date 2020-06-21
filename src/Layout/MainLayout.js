import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import {
  BodyStyle,
  Content,
  SideContent,
} from '../Styles/Styled-Components/BlogPost'

const MainLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <main>
            <Header  {...props} />
            <div className="container">
              <BodyStyle>
                <Content>
                  <Component {...props} />
                </Content>
                <SideContent>
                  <Sidebar />
                </SideContent>
              </BodyStyle>
            </div>
            <Footer />
          </main>
        )
      }}
    />
  )
}

export default withRouter(MainLayout)