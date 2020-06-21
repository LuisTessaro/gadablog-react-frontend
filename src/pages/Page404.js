import React from 'react'
import { Link } from 'react-router-dom'

import {
  SpacerTop,
} from '../Styles/Styled-Components/BlogPost'

import { colors } from '../Styles/StyleGuide'
import styled from 'styled-components'

const Page404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 84px);

  a {
    margin-top: 32px;
    padding: 16px 64px;
    border: 2px solid ${colors.main};
    border-radius: 5px;
    i {
      margin-right: 8px;
    }
    &:hover {
      color: ${colors.white};
      background-color: ${colors.main};
    }
  }

`

const Title = styled.h1`
  color: ${colors.main};
  font-size: 2rem;
  font-weight: 600;
`

export default () => {
  return (
    <Page404>
      <SpacerTop multiplier={12} />
      <Title>404 - Página não encontrada!</Title>
      <Link to="/"><i className="fas fa-arrow-left" />Voltar</Link>
    </Page404>
  )
}