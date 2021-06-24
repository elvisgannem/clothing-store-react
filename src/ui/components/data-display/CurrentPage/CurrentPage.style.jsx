import styled from 'styled-components'

export const Container = styled.div`
    width:60%;
    margin: 0 auto;
    margin-inline: auto;
    padding: 1rem 0;

    @media (max-width: 1024px) {
        width: 95%;
    }
`
export const Title = styled.h1 `
    font-family: ${(props) => props.fontFamily};
    font-size: 0.7rem;
    font-weight: ${(props) => props.weight};
    
`

export const Strong = styled.p `
    color: ${(props) => props.color};
    display:inline;
    font-weight: ${(props) => props.weight};
`
