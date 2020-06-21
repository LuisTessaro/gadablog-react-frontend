import React from 'react'

import DOMPurify from 'dompurify'

import Container from '../../Styles/Styled-Components/Container'

export default ({ html }) => {
  return (
    <Container dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html, { ADD_TAGS: ['iframe'], ADD_ATTR: ['allowfullscreen', 'frameborder', 'allow'] }) }} />
  )
}
