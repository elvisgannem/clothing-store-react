import styled from 'styled-components'

export const Container = styled.div `
    width: 60%;
    margin: 0 auto;
    padding: 1rem 0;
`

export const Title = styled.h2 `
    font-size: 1.2rem;
    text-align: center;
    font-family: ${(props) => props.fontFamily};
    font-weight: ${(props) => props.weight};
`

export const Icons = styled.div `
    display: flex;
    gap: 0.6rem;
    justify-content: center;
    margin-top: 1rem;
    cursor: pointer;
`