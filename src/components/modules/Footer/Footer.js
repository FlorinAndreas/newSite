import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React from 'react'

import { Footer as FooterStyled } from './Footer.styles'

export default function Footer() {
  return (
    <FooterStyled>
      <Container>
        <Typography variant="body2">{`Copyright © Honey Source ${new Date().getFullYear()}`}</Typography>
      </Container>
    </FooterStyled>
  )
}
