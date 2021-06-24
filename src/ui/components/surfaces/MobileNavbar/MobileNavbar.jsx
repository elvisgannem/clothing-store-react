import React from 'react'
import { Nav, MenuMask } from './MobileNavbar.style'

const MobileNavbar = ({ setShowMenu }) => {
    return (
        <>
        <MenuMask onClick={() => setShowMenu(false)} />
        <Nav>
            the menu
        </Nav>
        
        </>
    )
}

export default MobileNavbar
