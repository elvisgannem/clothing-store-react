import styled from 'styled-components'

export const Container = styled.div `
    width:60%;
    margin: 0 auto;
    margin-inline: auto;
    padding-bottom: 1rem;
    display: flex;
    gap: 1rem;
`

export const Title = styled.h1 `
    font-family: ${(props) => props.fontFamily};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    font-size: 1.5rem;
`

export const Content = styled.div `
    width: 100%;
`