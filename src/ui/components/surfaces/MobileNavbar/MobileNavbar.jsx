import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Nav, MenuMask, Container, NavList, ListElement } from './MobileNavbar.style'
import Logo from './../../../../assets/img/logo_webjump.png'
import CategoriesContext from './../../../../context/CategoriesContext'
import ThemeContext from './../../../../context/ThemeContext'

const MobileNavbar = ({ setShowMenu }) => {
    const { categories } = useContext(CategoriesContext)
    const theme = useContext(ThemeContext)
    return (
        <>
            <MenuMask onClick={() => setShowMenu(false)} />
            <Nav>
                <Container>
                    <img src={Logo} alt="Logo Webjump!" />

                    <NavList>
                        <ListElement
                            fontFamily={theme.typography.main}
                            color={theme.color.secondary.dark}
                            onClick={() => setShowMenu(false)}
                            ><Link to={'/'}>Página Inicial</Link>
                        </ListElement>

                        {categories.items.map((item, index) => 
                        
                        <ListElement 
                            key={index}
                            fontFamily={theme.typography.main}
                            color={theme.color.secondary.dark}
                            onClick={() => setShowMenu(false)}
                            ><Link to={`/${item.path}`}>{item.name}</Link>
                            </ListElement>)}
                        <ListElement
                            fontFamily={theme.typography.main}
                            color={theme.color.secondary.dark}
                            >Contato
                        </ListElement>
                    </NavList>
                </Container>
            </Nav>  
        </>
    )
}

export default MobileNavbar
