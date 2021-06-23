import styled from 'styled-components'

export const Container = styled.div `
    border-top: 1px solid ${(props) => props.borderColor};
    border-bottom: 1px solid ${(props) => props.borderColor};
    width: 100%;
    display:flex;
    justify-content: space-between;
    padding: 0.5rem 0.2rem;
`

export const Buttons = styled.div `
    display: flex;
    gap: 0.5rem;
    align-items:center;
`

export const OrderByContainer = styled.div`
    display:flex;
    align-items:center;
    gap: 0.5rem;
`

export const Subtitle = styled.p `
    font-family: ${(props) => props.fontFamily};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    font-size: 0.8rem;
`

export const Select = styled.select `
    width: 120px;
    padding: 0.1rem 0.3rem;
    border: 1px solid ${(props) => props.borderColor};
    border-radius: 3px;

/* CHANGE SELECT ARROW */
    -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: -2px;
  border: 1px solid #dfdfdf;
`