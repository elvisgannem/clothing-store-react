import styled from 'styled-components'

export const FooterContent = styled.footer`
  background-color: ${(props) => props.background};
  width: 60%;
  margin: 0 auto;
  height: 100px;

  @media (max-width: 1024px) {
    width: 95%;
  }
`
