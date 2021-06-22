import styled from 'styled-components'

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 0.5rem 0;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
