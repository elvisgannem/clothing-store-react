import styled from 'styled-components'

export const FilterContainer = styled.div `
    width:30%;
    border: 1px solid #5e606347;
    border-radius: 3px;
    padding: 0.5rem;
`

export const Title = styled.h2 `
    font-family: ${(props) => props.fontFamily};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    font-size: 1rem;
`

export const Subtitle = styled.h3 `
    margin: 0.8rem 0;
    font-family: ${(props) => props.fontFamily};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    font-size: 0.8rem;
`

export const List = styled.li `
    margin-bottom: 0.4rem;
    list-style:none;
    font-family: ${(props) => props.fontFamily};
    color: ${(props) => props.color};
    font-size: 0.8rem;

    &:before {
        content: "·";
        font-weight:800;
        margin-right: 0.4rem;
    }
`

export const Colors = styled.div `
    display: flex;
    gap: 1%;
`

export const Color = styled.div `
    width: 45px;
    height: 20px;
    background-color: ${(props) => props.color}
`