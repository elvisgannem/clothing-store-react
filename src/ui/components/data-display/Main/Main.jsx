import React, { useContext } from 'react'
import {
  Container,
  Sidebar,
  ListItems,
  Slider,
  Paragraph,
  Title,
  Content,
} from './Main.style'
import themeContext from './../../../../contexts/themeContext'

const Main = () => {
  const theme = useContext(themeContext)
  return (
    <Container>
      <Sidebar
        color={theme.color.secondary.lightgray}
        fontFamily={theme.typography.main}
        textColor={theme.color.secondary.dark}
      >
        <ListItems>Página Inicial</ListItems>
        <ListItems>Camisetas</ListItems>
        <ListItems>Calças</ListItems>
        <ListItems>Sapatos</ListItems>
        <ListItems>Contato</ListItems>
      </Sidebar>

      <Slider color={theme.color.secondary.darkgray}></Slider>

      <Content fontFamily={theme.typography.main}>
        <Title
          fontFamily={theme.typography.main}
          textColor={theme.color.secondary.dark}
          weight={theme.typography.weight.normal}
        >
          Seja bem-vindo!
        </Title>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          enim molestias, cumque temporibus error iure harum ipsa beatae nulla
          esse quia, nemo voluptatibus saepe cum commodi voluptatem amet
          corrupti cupiditate.
        </Paragraph>
      </Content>
    </Container>
  )
}

export default Main
