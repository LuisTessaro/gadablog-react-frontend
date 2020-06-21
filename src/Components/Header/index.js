import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { colors } from '../../Styles/StyleGuide'

const LoginButton = styled.i`
  color: white;
  background-color: lightgreen;
  border-radius: 5px;
  padding: 16px 32px;
  font-weight: 700;
  cursor: pointer;
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

      i {
        color: ${colors.white};
        margin-right: 16px;
        font-size: 2rem;
        cursor: pointer;
      }

      img {
        width: 50px;
      }
      h1 {
        color: ${colors.white};
        padding-left: 4px;
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

const Hamb = styled.div`
  transform: translateX(${props => props.open ? '0' : '-1000px'});
  position: fixed;
  top: 84px;
  left: 0;
  width: 375px;
  min-height: 100vh;
  background-color: #fff;
  z-index: 1000;

  transition: all 0.2s ease-in-out;

  li {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    
    a {
      display: flex;
      align-items: center;
      jusitfy-content: space-between;
      width: 100%;
      border-bottom: 1px solid lightgray;
      padding: 16px;
      i {
        // width: 100%;
        color: ${colors.main};
      }
      p {
        color: ${colors.main};
        width: 100%;
        text-align: center; 
      }
      
      &:hover {
        background-color: ${colors.main};
        i {
          color: ${colors.white};
        }
        p {
          color: ${colors.white};
        }
      }
    }
  }
`

const Menu = () => {
  return (
    <ul>
      <li><Link to='/login'><LoginButton className="fas fa-sign-in-alt" /></Link></li>
    </ul>
  )
}

const MenuLogged = ({ logout, match }) => {
  return (
    <ul>
      <LoginButton as={Link} to="/posts">Ver meus Posts</LoginButton>
      <LoginButton as={Link} to="/new">Criar Post</LoginButton>
      <LoginButton onClick={logout}>Logout</LoginButton>
    </ul>
  )
}

export default ({ match }) => {
  const matchedUrl = match.url

  const [loggedin, setLoggedin] = useState(false)
  const [isHome, setIsHome] = useState(matchedUrl !== '/' ? false : true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (matchedUrl !== '/')
      setIsHome(false)
    else
      setIsHome(true)
  }, [matchedUrl])

  const logout = () => {
    localStorage.removeItem('token')
    setLoggedin(false)
  }

  if (loggedin) {
    return (
      <HeaderStyle>
        <div className="container">
          <MenuLogged logout={logout} />
        </div>
      </HeaderStyle>
    )
  }

  return (
    <>
      <HeaderStyle>
        <div className="container">
          <div className="top">
            {isHome
              ?
              open
                ?
                <i onClick={() => setOpen(!open)} className="fas fa-chevron-left" />
                :
                <i onClick={() => setOpen(!open)} className="fas fa-bars" />
              :
              <Link to='/'>
                <i className="fas fa-chevron-left" />
              </Link>
            }
            <Link to='/' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img alt="gadaba-logo" src="/img/logo.png" />
              <h1>GadaBlog</h1>
            </Link>
          </div>
          <Menu />
        </div>
      </HeaderStyle >
      <Hamb open={open}>
        {/* <div className="bg" /> */}
        <ul>
          <li><Link to="/login"><i className="fas fa-sign-in-alt" /><p>Login</p></Link></li>
          {/* <li><Link to="/categories"><i className="fas fa-list-ul" /><p>Categorias</p></Link></li> */}
          <li><a href="https://luistessaro.github.io/"><i className="fas fa-user" /><p>Contato</p></a></li>
          <li><a href="https://luistessaro.github.io/"><i className="fas fa-envelope" /><p>Envie uma mensagem</p></a></li>
          <li><a href="https://www.youtube.com/watch?v=2dbR2JZmlWo"><i className="fas fa-bullhorn" /><p>Reclamações</p></a></li>
        </ul>
      </Hamb>
    </>
  )
}