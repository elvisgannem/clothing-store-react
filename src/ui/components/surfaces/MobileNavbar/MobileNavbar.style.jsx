import styled from 'styled-components'

export const Nav = styled.nav`
    position: fixed;
    background: white;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    z-index: 50;
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