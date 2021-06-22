import React, { useContext } from 'react'
import { FooterContent } from './Footer.style'
import themeContext from '../../../../contexts/themeContext'

const Footer = () => {
  const theme = useContext(themeContext)
  return <FooterContent background={theme.color.primary.main}></FooterContent>
}

export default Footer
