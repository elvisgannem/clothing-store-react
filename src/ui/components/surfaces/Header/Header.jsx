import React, { useContext } from 'react'
import Logo from './../../../../assets/img/logo_webjump.png'
import { Container, Button, FlexContainer, Input } from './Header.style'
import themeContext from './../../../../contexts/themeContext'

const Header = () => {
  const theme = useContext(themeContext)

  return (
    <Container>
      <FlexContainer>
        <div>
          <img src={Logo} alt="Logo Webjump!" />
        </div>
        <div>
          <Input type={'text'} border={theme.color.secondary.gray} />
          <Button
            color={theme.color.primary.main}
            fontFamily={theme.typography.main}
            fontWeight={theme.typography.weight.extrabold}
          >
            BUSCAR
          </Button>
        </div>
      </FlexContainer>
    </Container>
  )
}

export default Header
