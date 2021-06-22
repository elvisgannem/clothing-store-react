import styled from 'styled-components'
import theme from '../../../themes/theme'

export const NavbarContainer = styled.nav`
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
`

export const Nav = styled.ul`
  width: 60%;
  padding: 0.8rem 0;
  color: white;
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.fontFamily};
  font-size: 0.8rem;
  display: flex;
  gap: 8%;
`

export const NavItems = styled.li`
  list-style: none;
`
