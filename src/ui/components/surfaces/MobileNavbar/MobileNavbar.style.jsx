import styled from 'styled-components'

export const Nav = styled.nav`
    position: fixed;
    background: white;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    z-index: 50;
    display: flex;
    justify-content: center;
`

export const Container = styled.div `
    margin-top: 1rem;
`

export const MenuMask = styled.div`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    /* --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); */
`

export const NavList = styled.ul `
    list-style: none;
    margin-top: 0.5rem;
`

export const ListElement = styled.li `
    margin-top: 0.8rem;
    font-family: ${(props) => props.fontFamily};
    color: ${(props) => props.color};
    text-align: center;
`

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  color: ${(props) => props.color};
`