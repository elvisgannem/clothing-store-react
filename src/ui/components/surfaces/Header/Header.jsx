import React, { useContext, useEffect, useState } from 'react'
import Logo from './../../../../assets/img/logo_webjump.png'
import { IoMenu, IoSearch } from 'react-icons/io5'

import {
  Container,
  Button,
  FlexContainer,
  Input,
  SearchContainer,
  Wrapper,
} from './Header.style'
import ThemeContext from './../../../../context/ThemeContext'
import ApiService from './../../../../services/ApiService'

const Header = () => {
  const [categories, setCategories] = useState([])
  const theme = useContext(ThemeContext)

  useEffect(() => {
    fetch(`${ApiService.baseURL}V1/categories/list`)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <Container>
      <FlexContainer>
        {/* HIDE IN DESKTOP */}
        <Wrapper>
          <IoMenu size={'30px'} />
        </Wrapper>

        <div>
          <img src={Logo} alt="Logo Webjump!" />
        </div>

        <Wrapper>
          <IoSearch size={'25px'} color={theme.color.primary.main} />
        </Wrapper>
        {/* ----- */}

        {/* HIDE IN MOBILE */}
        <SearchContainer>
          <Input type={'text'} border={theme.color.secondary.gray} />
          <Button
            color={theme.color.primary.main}
            fontFamily={theme.typography.main}
            fontWeight={theme.typography.weight.extrabold}
          >
            BUSCAR
          </Button>
        </SearchContainer>
        {/* ------ */}
      </FlexContainer>
    </Container>
  )
}

export default Header
