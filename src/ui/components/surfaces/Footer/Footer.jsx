import React, { useContext } from 'react'
import { FooterContent } from './Footer.style'
import ThemeContext from '../../../../context/ThemeContext'

const Footer = () => {
  const theme = useContext(ThemeContext)
  return <FooterContent background={theme.color.primary.main}></FooterContent>
}

export default Footer
