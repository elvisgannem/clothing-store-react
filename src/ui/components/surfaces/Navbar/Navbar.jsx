import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavbarContainer, Nav, NavItems } from './Navbar.style'
import ThemeContext from './../../../../context/ThemeContext'
import CategoriesContext from './../../../../context/CategoriesContext'
import ApiService from './../../../../services/ApiService'

const Navbar = () => {
  const theme = useContext(ThemeContext)
  const { categories, setCategories } = useContext(CategoriesContext)

  useEffect(() => {
    fetch(`${ApiService.baseURL}V1/categories/list`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((error) => console.log(error))
  }, [setCategories])

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
