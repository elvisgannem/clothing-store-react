import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;

  @media (max-width: 450px) {
    display: none;
  }
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

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    gap: 0;
    justify-content: space-between;
    font-size: 0.7rem;
  }
`

export const NavItems = styled.li`
  list-style: none;
`
