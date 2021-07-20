import React, { useContext, useState } from 'react'
import { IoMenu, IoSearch } from 'react-icons/io5'
import {
  Container,
  Button,
  FlexContainer,
  Input,
  SearchContainer,
  Wrapper,
  Title
} from './Header.style'
import ThemeContext from './../../../../context/ThemeContext'
import MobileNavbar from './../MobileNavbar/MobileNavbar'

const Header = () => {
  const theme = useContext(ThemeContext)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Container>
      
      <FlexContainer>
        {/* HIDE IN DESKTOP */}
        <Wrapper>
          <IoMenu 
            size={'30px'}
            onClick={() => setShowMenu(!showMenu)} />
        </Wrapper>

        {showMenu ? <MobileNavbar setShowMenu={setShowMenu} /> : ''}

        <div>
          {/* <img src={Logo} alt="Logo Webjump!" /> */}
          <Title color={theme.color.primary.main}>Clothing Store</Title>
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
