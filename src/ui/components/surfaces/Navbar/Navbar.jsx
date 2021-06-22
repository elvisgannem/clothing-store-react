import React, { useContext } from 'react'
import { NavbarContainer, Nav, NavItems } from './Navbar.style'
import themeContext from './../../../../contexts/themeContext'

const Navbar = () => {
  const theme = useContext(themeContext)
  return (
    <NavbarContainer color={theme.color.primary.main}>
      <Nav
        weight={theme.typography.weight.extrabold}
        fontFamily={theme.typography.main}
      >
        <NavItems>PÁGINA INICIAL</NavItems>
        <NavItems>CAMISETAS</NavItems>
        <NavItems>CALÇAS</NavItems>
        <NavItems>SAPATOS</NavItems>
        <NavItems>CONTATO</NavItems>
      </Nav>
    </NavbarContainer>
  )
}

export default Navbar
