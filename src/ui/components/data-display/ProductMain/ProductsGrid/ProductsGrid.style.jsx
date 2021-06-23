import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 1rem;
    text-align: center;
`

export const ProductContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    column-gap: 5%;
    justify-content: space-between;
`
export const Image = styled.img`
    width: 120px;
    height: 120px;
    border: 1px solid ${(props) => props.borderColor};

    @media (max-width:1024px) {
        width: 120px;
        height: 120px;
    }
`

export const Title = styled.h3 `
    font-family: ${(props) => props.fontFamily};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    font-size: 0.8rem;
    margin-top: 0.2rem;
    
`

export const Price = styled.p `
    font-family: ${(props) => props.fontFamily};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    font-size: 1rem;
    margin-top: 0.5rem;
    
`

export const Button = styled.button `
    font-family: ${(props) => props.fontFamily};
    color: ${(props) => props.color};
    background-color: ${(props) => props.background};
    font-weight: ${(props) => props.weight};
    outline: none;
    border: none;
    width: 120px;
    margin-top: 0.3rem;
    border-radius: 5px;
    padding: 0.3rem 0;

    &:hover{
        background-color: ${(props) => props.onHoverBackground};
        transition: 0.2s ease-in-out;
    }

    @media (max-width:1024px) { 
        width: 120px;
    }

`