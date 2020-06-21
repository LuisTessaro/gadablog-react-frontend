import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import classNames from 'classnames'

import { Link } from 'react-router-dom'

import { colors } from '../../Styles/StyleGuide'

const LoginButton = styled.a`
  color: white;
  background-color: lightgreen;
  border-radius: 5px;
  padding: 16px 32px;
  font-weight: 700;
  margin-left: 16px;
`

const HeaderStyle = styled.div`
  min-width: 84px;
  width; 100%;
  background-color: ${colors.main};
  padding 16px;
  position: sticky;
  top: 0;
  z-index: 100;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .top {
      display: flex;
      align-items: center;

      .fa.fa-chevron-left {
        color: ${colors.white};
        margin-right: 16px;
        font-size: 2rem;
        display: none;
      }
      .fa.fa-chevron-left.active {
        display: block;
      }

      img {
        width: 50px;
      }
      h1 {
        color: ${colors.white};
        padding: 0 16px;
        font-weight: 700;
        font-size: 1.3rem;
        @media (max-width: 620px) {
          display: none;
        }
      }
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a.send-to {
        color: ${colors.white};
        padding: 0 16px;
        margin-left: 16px;
        font-weight: 700;
        font-size: 1.3rem;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
     
    }
  }
`

const Menu = () => {
  return (
    <ul>
      <a className="send-to" href={"http://luistessaro.github.io/"}><i className="fas fa-user-plus" /></a>
      <LoginButton as={Link} to="/login">Login</LoginButton>
    </ul>
  )
}

const MenuLogged = ({ logout }) => {
  return (
    <ul>
      <LoginButton as={Link} to="/posts">Ver meus Posts</LoginButton>
      <LoginButton as={Link} to="/new">Criar Post</LoginButton>
      <LoginButton onClick={logout}>Logout</LoginButton>
    </ul>
  )
}

export default () => {
  const [isPost, setIsPost] = useState(false)
  const [loggedin, setLoggedin] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token'))
      setLoggedin(true)

    setIsPost(window.location.pathname !== '/' ? true : false)
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    setLoggedin(false)
  }

  return (
    <>
      <HeaderStyle>
        <div className="container">
          <div className="top">
            <Link to='/'><i className={classNames("fa fa-chevron-left", isPost ? 'active' : '')} /></Link>
            <img alt="gadaba-logo" src="/img/logo.png" />
            <h1>GadaBlog</h1>
          </div>
          {loggedin
            ?
            <>
              <MenuLogged logout={logout} />
            </>
            :
            <>
              <Menu />
            </>
          }
        </div>
      </HeaderStyle>
    </>
  )
}