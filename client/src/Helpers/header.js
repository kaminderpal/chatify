import React from 'react'
import { Typography } from '@material-ui/core';

const Header = ({ variant, color,children }) => {
  return (
       <Typography variant={variant} color={color} align="center" >
          { children }
       </Typography>
  )
}

export default Header
