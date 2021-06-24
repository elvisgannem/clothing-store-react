import React, { useContext } from 'react'
import {
  Container,
  Slider,
  Paragraph,
  Title,
  Content,
} from './Main.style'
import  Sidebar  from './Sidebar/Sidebar'
import ThemeContext from './../../../../context/ThemeContext'

const Main = () => {
  const theme = useContext(ThemeContext)
  return (
    <Container>
      <Sidebar />
      
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
