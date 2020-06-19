import React from 'react'
import style from 'styled-components'

import { colors } from '../../Styles/StyleGuide'

const FooterStyle = style.div`
  width; 100%;
  background-color: ${colors.main};
  height: 200px;
`


export default () => {
  return (
    <FooterStyle>
      
    </FooterStyle>
  )
}