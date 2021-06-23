import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarContainer, Nav, NavItems } from './Navbar.style'
import ThemeContext from './../../../../context/ThemeContext'
import ApiService from './../../../../services/ApiService'

const Navbar = () => {
  const [categories, setCategories] = useState()
  const theme = useContext(ThemeContext)

  useEffect(() => {
    fetch(`${ApiService.baseURL}V1/categories/list`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <NavbarContainer color={theme.color.primary.main}>
      <Nav
        weight={theme.typography.weight.extrabold}
        fontFamily={theme.typography.main}
      >
        <NavItems>
          <Link to={'/'}>PÁGINA INICIAL</Link>
        </NavItems>

        {categories !== undefined
          ? categories.items.map((item, index) => (
              <NavItems key={index}>
                <Link to={`/${item.path}`}>{item.name.toUpperCase()}</Link>
              </NavItems>
            ))
          : 'Carregando...'}

        <NavItems>CONTATO</NavItems>
      </Nav>
    </NavbarContainer>
  )
}

export default Navbar
