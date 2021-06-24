import styled from 'styled-components'

export const Container = styled.div `
    margin-top: 1rem;
`

export const List = styled.ul `
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const ItemList = styled.li ``

export const PagButton = styled.button `
    outline: none;
    border: none;
    background: transparent;
    font-family: ${(props) => props.fontFamily};
    color: ${(props) => props.color};

    &:active, &:focus {
        color: ${(props) => props.activeColor};
        font-weight: ${(props) => props.activeWeight}
    }

    &:hover {
        transition: 0.2s;
        color: ${(props) => props.activeColor};
    }
`