import styled from 'styled-components'

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 1.5rem 0;

  @media (max-width: 1024px) {
    width: 95%;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SearchContainer = styled.div`
  @media (max-width: 450px) {
    display: none;
  }
`

export const Button = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  color: white;
  padding: 0.5rem 1.25rem;
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
`

export const Input = styled.input`
  padding: 0.5rem 0;
  outline: none;
  border: 1px solid ${(props) => props.border};
`

export const Wrapper = styled.button`
  border: none;
  outline: none;
  background: transparent;

  @media (min-width: 451px) {
    display: none;
  }
`

export const ResultContainer = styled.div `
  position: fixed;
  background: white;
  padding: 0.5rem 2rem;
  border-radius: 3px;
`

export const ResultTitle = styled.h3 `
  font-size: 1rem;
  text-align: center;
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.weight};
`

export const Results = styled.p `
  margin-top: 0.5rem;
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.weight};
  font-size: 0.8rem;
`

export const ResultHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`