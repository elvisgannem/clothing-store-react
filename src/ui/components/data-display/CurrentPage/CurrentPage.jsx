import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Title, Container, Strong } from './CurrentPage.style'
import ThemeContext from './../../../../context/ThemeContext'

const CurrentPage = (props) => {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <Title fontFamily={theme.typography.main} weight={theme.typography.weight.normal}><Link to={'/'}>Página Inicial</Link> - <Strong color={theme.color.primary.main} weight={theme.typography.weight.extrabold}>{props.title}</Strong>
      </Title>
    </Container>
  )
}

export default CurrentPage
