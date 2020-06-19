import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import classNames from 'classnames'

import { Link } from 'react-router-dom'

import { colors } from '../../Styles/StyleGuide'

const Menu = () => {
  return (
    <ul>
      <a href={"http://luistessaro.github.io/"}><i className="fas fa-user-plus"/></a>
    </ul>
  )
}

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
        @media (max-width: 420px) {
          display: none;
        }
      }
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a, p {
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


export default () => {
  const [isPost, setIsPost] = useState(false)

  useEffect(() => {
    console.log(window.location.pathname)
    setIsPost(window.location.pathname !== '/' ? true : false)
  }, [])

  return (
    <>
      <HeaderStyle>
        <div className="container">
          <div className="top">
            <Link to='/'><i className={classNames("fa fa-chevron-left", isPost ? 'active' : '')} /></Link>
            <img alt="gadaba-logo" src="/img/logo.png" />
            <h1>GadaBlog</h1>
          </div>
          <Menu />
        </div>
      </HeaderStyle>
    </>
  )
}