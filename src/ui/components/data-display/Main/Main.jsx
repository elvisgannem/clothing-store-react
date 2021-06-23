import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Sidebar,
  ListItems,
  Slider,
  Paragraph,
  Title,
  Content,
} from './Main.style'
import ThemeContext from './../../../../context/ThemeContext'
import CategoriesContext from './../../../../context/CategoriesContext'

const Main = () => {
  const theme = useContext(ThemeContext)
  const { categories } = useContext(CategoriesContext)
  return (
    <Container>
      <Sidebar
        color={theme.color.secondary.lightgray}
        fontFamily={theme.typography.main}
        textColor={theme.color.secondary.dark}
      >
        <ListItems>Página Inicial</ListItems>

        {categories !== undefined ? (
          categories.items.map((item, index) => (
            <ListItems key={index}><Link to={`/${item.path}`}>{item.name}</Link></ListItems>
          ))
        ) : (
          <ListItems>Carregando...</ListItems>
        )}

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
