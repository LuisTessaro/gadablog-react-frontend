import styled from 'styled-components'

import { colors } from '../StyleGuide'

export const MiddlePos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 84px);
`

export const LoadIcon = styled.i`
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  animation: spin ${props => props.speed ? props.speed : '1s'} linear infinite;
  font-size: ${props => props.size ? props.size : '1rem'};
  color: ${colors.main};
`