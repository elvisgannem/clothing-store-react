import React, { useContext } from 'react'
import Logo from './../../../assets/img/logo_webjump.png'
import { Container, Button, FlexContainer } from './Header.style'
import themeContext from './../../../contexts/themeContext'

const Header = () => {
  const theme = useContext(themeContext)

  return (
    <Container>
      <FlexContainer>
        <div>
          <img src={Logo} alt="Logo Webjump!" />
        </div>
        <div>
          <Button
            background={theme.color.main}
            fontFamily={theme.typography.main}
          >
            BUSCAR
          </Button>
        </div>
      </FlexContainer>
    </Container>
  )
}

export default Header
