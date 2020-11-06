import Typography from '@material-ui/core/Typography'
import Link from 'components/foundations/Link/Link'
import React from 'react'

export default function Logo() {
  return (
    <Link to="/">
      <Typography component="div" variant="h5">
        Honey Source
      </Typography>
    </Link>
  )
}
