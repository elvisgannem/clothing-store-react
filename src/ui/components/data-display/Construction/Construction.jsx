import React, { useContext } from 'react'
import { Container, Title, Icons } from './Construction.style'
import ThemeContext from './../../../../context/ThemeContext'
import { IoLogoLinkedin, IoLogoGithub, IoGlobeOutline } from 'react-icons/io5'

const Construction = () => {
    const theme = useContext(ThemeContext)
    return (
        <Container>
            <Title 
                fontFamily={theme.typography.main}
                weight={theme.typography.weight.normal}>
                Esta pagina está em construção
            </Title>
            <Icons>
                <a href="https://www.linkedin.com/in/elvis-gannem-45a3b1142/" target="_blank" rel="noreferrer"><IoLogoLinkedin size={'25px'} color={theme.color.secondary.dark} /></a>
                <a href="https://github.com/elvisgannem" target="_blank" rel="noreferrer"><IoLogoGithub size={'25px'} color={theme.color.secondary.dark} /></a>
                <a href="https://elvisgannem.com/" target="_blank" rel="noreferrer"><IoGlobeOutline size={'25px'} color={theme.color.secondary.dark} /></a>
            </Icons>
        </Container>
    )
}

export default Construction
